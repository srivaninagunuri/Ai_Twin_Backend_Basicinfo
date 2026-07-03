const twinService = require("../services/twinService");

const saveBasicInfo = async (req, res) => {

    try {

        const result = await twinService.createTwin(req.body);

        res.status(201).json(result);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    saveBasicInfo
};