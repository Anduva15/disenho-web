export default (schemaName, Schema) => {
  const handleSuccess = (res, message) => res.status(200).json(message);
  //const handleFailure = (res, message) => res.status(500).json(message);

  //app.use()

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
      } 
      catch {
        //handleFailure(res, {error: `Error obteniendo todo los ${schemaName}`});*/
        res.status(500).json({ error: 'Invalid credentials' });
      }
    },



    get: async (req, res) => {
      try {
        const id = req.params.id;
        const findParams = isNaN(id) ? { _id: id } : { id };
        const item = await Schema.findOne(findParams);

        handleSuccess(res, item);
      } catch {
        res.status(500).json({error: 'Failed process' });
        console.error('Proceso fallido');
      }
    },



    create: (req, res) => {
      const item = req.body;
      const newItem = new Schema(item);

      try{
        newItem.save(e => {
          if (e) {
            console.error('Error en la creación del usuario');
            res.status(500).json({ error: `'Error creando ${schemaName}'` });
          } else {
            handleSuccess(res, newItem);
          }
        });
      }
      catch{
        res.status(500).json({error: 'Failed process' });
        console.error('Proceso fallido');
      }

      
    },
    
    
    
    update: async (req, res) => {
      const _id = req.params.id;
      const bodyId = req.body._id;
      
      try {
        const item = await Schema.findOne({ _id });

        if (bodyId && bodyId !== _id) {// validate if para with body id
          return res.status(400).json({ error: 'usuario no valido' });
        }

        Object.keys(req.body).forEach(key => {
          item[key] = req.body[key];
        });

        await item.save();
        handleSuccess(res, item);
        res.status(200).json({message: 'Proceso exitso' });
      } 
      catch {
        //handleSuccess(res, { error: `${schemaName} con id ${_id}, no existe`});
        res.status(404).json({error: 'Invalid credentials' });// add 404
      }
    },



    delete: async (req, res) => {
      const _id = req.params.id;
      const bodyId = req.body._id;

      try{
        if (bodyId && bodyId !== _id) {// validate if para with body id
          return res.status(400).json({ error: 'usuario no valido' });
        }
  
        try {
          await Schema.deleteOne({ _id });
          res.status(200).json({message: '' });
          handleSuccess(res, { success: 'Exito al borrar' });
        } 
        catch {
          handleSuccess(res, { error: `${schemaName} con id ${_id}, no existe` });
          console.error('Error al eliminar el usuario');
          return res.status(400).json({ error: 'usuario no valido' });
        }
      }
      catch{
        console.error('Error en el proceso');
        return res.status(500).json({ error: 'Error en el proceso' });
      }

      
    },
  };
};