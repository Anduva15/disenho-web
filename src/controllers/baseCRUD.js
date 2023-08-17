export default (schemaName, Schema) => {
  const handleSuccess = (res, message) => res.status(200).json(message);
  const handleFailure = (res, message) => res.status(500).json(message);

  app.use()

  return {
    getAll: async (req, res) => {
      try {
        const findParams = Object.keys(Schema.schema.obj).reduce(
          (acc, key) =>
            req.query[key] ? { ...acc, [key]: req.query[key] } : acc,
          {}
        );

        const items = await Schema.find(findParams);

        handleSuccess(res, items);
      } catch {
        handleFailure(res, {
          error: `Error obteniendo todo los ${schemaName}`,
        });
        
        console.error('Error en el proceso de obtención');
      }
    },
    get: async (req, res) => {
      try {
        const id = req.params.id;
        const findParams = isNaN(id) ? { _id: id } : { id };
        const item = await Schema.findOne(findParams);

        handleSuccess(res, item);
      } catch {
        handleFailure(res, {
          error: `Error: El ${_id} no existe en ${schemaName}`,
        });

        console.error('Usuario no encontrado');
      }
    },
    create: (req, res) => {
      const item = req.body;
      const newItem = new Schema(item);

      newItem.save(e => {
        if (e) {
          console.error('Error en la creación del usuario');
          handleFailure(res, { error: `'Error creando ${schemaName}'` });
        } else {
          handleSuccess(res, newItem);
        }
      });
    },
    update: async (req, res) => {
      const _id = req.params.id;
      try {
        const item = await Schema.findOne({ _id });

        // add 404
        // validate if para with body id

        Object.keys(req.body).forEach(key => {
          item[key] = req.body[key];
        });

        await item.save();

        handleSuccess(res, item);
      } catch {
        handleSuccess(res, { error: `${schemaName} con id ${_id}, no existe` 
        });

        console.error('Error durante el proceso de carga');
      }
    },
    delete: async (req, res) => {
      const _id = req.params.id;

      try {
        await Schema.deleteOne({ _id });

        handleSuccess(res, { success: 'Exito al borrar' });
      } catch {
        handleSuccess(res, { error: `${schemaName} con id ${_id}, no existe` });
        console.error('Error al eliminar el usuario');
      }
    },
  };
};
