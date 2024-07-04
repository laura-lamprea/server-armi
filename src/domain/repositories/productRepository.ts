const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../../../storage/data.json');

const ProductRepository = {
    getAllProducts: () => {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        return data.products;
    },
    getCart: () => {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        return data.cart;
    },
    saveCart: (cart: any) => {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        data.cart = cart;
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    }
}

export default ProductRepository;