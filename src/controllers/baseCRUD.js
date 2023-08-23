import _ from 'lodash';

export default (schemaName, Schema, omitPassword) => {
  const handleSuccess = (res, message) => res.status(200).json(message);
  const handleFailure = (res, message) => res.status(500).json(message);
  const handleNotFound = (res, message) => res.status(404).json(message);

  return {
    getAll: async (req, res) => {
      try {
        const findParams = Object.keys(Schema.schema.obj).reduce((acc, key) => {
          if (req.query[key]) {
            return { ...acc, [key]: { $regex: req.query[key], $options: 'i' } };
          }
          return acc;
        }, {});

        const items = await Schema.find(findParams);
        return handleSuccess(res, items);
      } catch (e) {
        console.error(e);
        return handleFailure(res, {
          error: `Error obteniendo todos los ${schemaName}s`,
        });
      }
    },

    get: async (req, res) => {
      try {
        const id = req.params.id;
        const findParams = isNaN(id) ? { _id: id } : { id };
        const item = await Schema.findOne(findParams);

        if (!item) {
          return handleNotFound(res, {
            error: `Id de ${schemaName} no encontrado`,
          });
        }

        return handleSuccess(res, item);
      } catch (e) {
        console.error(e);
        return handleFailure(res, { error: `Error obteniendo ${schemaName}` });
      }
    },

    create: (req, res) => {
      const item = req.body;
      const newItem = new Schema(item);

      try {
        newItem.save(e => {
          if (e) {
            console.error(e);
            handleFailure(res, { error: `Error creando ${schemaName}` });
          } else {
            handleSuccess(res, newItem);
          }
        });
      } catch (e) {
        console.error(e);
        handleFailure(res, { error: `Error creando ${schemaName}` });
      }
    },

    update: async (req, res) => {
      const id = req.params.id;
      const bodyId = req.body.id;

      try {
        const findParams = isNaN(id) ? { _id: id } : { id };
        const item = await Schema.findOne(findParams);

        if (bodyId && bodyId != id) {
          // validate if para with body id
          return handleNotFound(res, {
            error: `Id de ${schemaName} no encontrado`,
          });
        }

        Object.keys(req.body).forEach(key => {
          item[key] = req.body[key];
        });

        await item.save();
        handleSuccess(res, item);
      } catch (e) {
        handleFailure(res, { error: `Error actualizando ${schemaName}, ${e}` });
      }
    },

    delete: async (req, res) => {
      const id = req.params.id;
      const findParams = isNaN(id) ? { _id: id } : { id };

      try {
        const transaction = await Schema.deleteOne(findParams);

        if (transaction.deletedCount <= 0) {
          return handleNotFound(res, `Id de ${schemaName} no encontrado`);
        }

        handleSuccess(res, { success: `Exito al borrar ${schemaName}` });
      } catch (e) {
        handleFailure(res, {
          error: `Error borrando ${schemaName} con id ${id}`,
        });
      }
    },
  };
};
