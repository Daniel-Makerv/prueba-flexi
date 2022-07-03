const sendNotification = async(filter,message)=>{
    try{
    var query = new Parse.Query(User)
    let results = await query.find();
    console.log(filter['planta'].filter(planta=>planta=='Admon y Op. Prof'))
    for(let user of results){
        let planta = filter['planta'].filter(planta=>planta==user.get('planta'))
        let razonSocial = filter['razonSocial'].filter(planta=>planta==user.get('razonSocial'))
        let segmentoPoblacion = filter['segmentoPoblacion'].filter(planta=>planta==user.get('segmentoPoblacion'))
        let puesto = filter['puesto'].filter(planta=>planta==user.get('puesto'))
       if(puesto.length>0 &&
        razonSocial.length>0 &&
        segmentoPoblacion.length>0 &&
        planta.length>0){
            console.log("Si entre con filtros")
            user.get('installationId')&&Parse.cloud.run('pushNotification',{
           id:user.get('installationId'),
           message:message
       })
       }else{
    console.log("No entre con filtros")
    }
    }
    }catch(e){
    console.log("ocurrio un error enviando las notificaciones")
    }
    }

    const saveNotification = (title,subtitle,body,users)=>{
    const user = new User();
    user.set('title',message);
    user.set('subtitle',subtitle);
    user.set('body',body);
    var relation = user.relation("userRelation");
     relation.add(users)
     /*for(let user of users){
         relation.add(user)
     }*/
    await user.save();
    }