const Twin = require("../models/twinModel");

const createTwin = async (data) => {

    const twin = await Twin.create({
        twin_name: data.twin_name,
        brand_description: data.brand_description
    });

    return twin;
};

module.exports = {
    createTwin
};