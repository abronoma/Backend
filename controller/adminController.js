import admin from '../Model/adminModel.js'


// create Admin
export const addAdmin= async (req, res ) => {
    const { name, email,  address} = req.body;

const user = await admin.create({ name, email, address });

    res.status(201).send(admin);
}

// find all fcilitators
export const fetchAllAdmins = async (req, res ) => {
   try {
    const user = await admin.findAll();
    res.status(200).send(user)
   } catch (error) {
    console.log(error);
    res.status(500).send('unable to fetch Admins')
   }
}


// find one facilitator
export const fetchOneAdmin = async (req, res ) => {
    try {
     const Admins = await admin.findAll({
        where: {
            id: id
        }
     });
     res.status(200).send(Admins)
    } catch (error) {
     console.log(error);
     res.status(500).send('unable to fetch Administrators!')
    }
 }


//  delete a facilitator
export const delAdmin = async (req, res ) => {
    try {
     const user = await admin.destroy({
         where: {
            supervisor: id
         }
     });
     res.status(200).send(admin)
    } catch (error) {
     console.log(error);
     res.status(500).send('unable to delete an Admin!')
    }
 }