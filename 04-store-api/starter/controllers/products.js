//define the functions to be run for every possible routes 
const Product = require('../models/product');

const getAllProductsStatic = async(req, res) => {
    const products = await Product.find({}).sort("-price");
    //putting a negative sign before the property by which we want to sort will cause the sorting to
    //happen in a decreasing order
    res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async(req, res) => {
    const { featured, company, name, sort, select, numericFilters } = req.query;
    let queryObject = {};

    if(featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if(company) {
        queryObject.company = company;
    }

    const regex = /\b(>|<|>=|<=|=)\b/g;
    const options = ['price', 'rating'];

    if(name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }

    if(numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '<': '$lt',
            '>=': '$gte',
            '<=': '$lte',
            '=': '$eq'
        };

        let filters = numericFilters.replace(regex, (match) => `-${operatorMap[match]}-`);
        //learn about the replace function in Javascript 
        filters = filters.split(',').forEach((item) => {
            const [ field, operator, value ] = item.split('-');
            if(options.includes(field)) {
                queryObject[field] = {[operator]: Number(value)}
            }
        });
    }
    
    //find and process and then assign the final result 
    let results = Product.find(queryObject);

    if(sort) {
        const sortList = sort.split(',').join(' ');
        results = results.sort(sortList);
    } else {
        results = results.sort('createdAt');
    }

    if(select) {
        const selectList = select.split(',').join(' ');
        results = results.select(selectList);
    }

    //To skip the number of pages
    //Try and understand the logic behind this
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1)*limit;

    results = results.skip(skip).limit(limit);

    const products = await results;
    res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic,
};

