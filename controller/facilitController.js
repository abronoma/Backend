import facilitator from '../Model/facilitModel.js';

// create facilitator
export const addFacilitator = async (req, res) => {
    try {
        const newFacilitator = await facilitator.create(req.body); 
        console.log(req.body);
        res.status(201).json(newFacilitator);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add facilitator" });
    }
};


// find all facilitators
export const fetchAllfacilitators = async (req, res) => {
    try {
        const users = await facilitator.findAll();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send('Unable to fetch facilitators!');
    }
}

// find one facilitator
export const fetchOneFacilitator = async (req, res) => {
    const { id } = req.params;

    try {
        const facilitatorData = await facilitator.findByPk(id);
        if (facilitatorData) {
            res.status(200).send(facilitatorData);
        } else {
            res.status(404).send('Facilitator not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Unable to fetch facilitator!');
    }
}

// delete a facilitator
export const delFacilitator = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await facilitator.destroy({
            where: { id }
        });
        if (result) {
            res.status(200).send('Facilitator deleted successfully');
        } else {
            res.status(404).send('Facilitator not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Unable to delete facilitator!');
    }
}
