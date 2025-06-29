const Product = require('../models/Product');

// Helper function to get the base URL for images
const getImageUrl = (imagePath) => {
  // In production, use the deployed URL, otherwise use localhost
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? process.env.RENDER_EXTERNAL_URL || process.env.BASE_URL 
    : 'http://localhost:5000';
  return imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`;
};

// POST /api/products/seed
exports.seed = async (_req, res, next) => {
  try {
    const demo = [
      { machineNumberPlate:'TR-01',
        type:'Tractor',
        description:'20-HP Tractor',
        price: 380_000,
        image: getImageUrl('/static/tractor.jpg') },

      { machineNumberPlate:'RO-02',
        type:'Rotavator',
        description:'Small Rotavator',
        price: 85_000,
        image: getImageUrl('/static/rotavator.jpg') },

      { machineNumberPlate:'TH-03',
        type:'Thresher',
        description:'Multi-crop Thresher',
        price: 120_000,
        image: getImageUrl('/static/thresher.jpg') },

      { machineNumberPlate:'PT-04',
        type:'Power Tiller',
        description:'8-HP Power Tiller',
        price: 150_000,
        image: getImageUrl('/static/power_tiller.jpg') },

      { machineNumberPlate:'CH-05',
        type:'Combine Harvester',
        description:'Self-propelled Combine',
        price: 1_800_000,
        image: getImageUrl('/static/combine.jpg') },

      { machineNumberPlate:'SD-06',
        type:'Seed Drill',
        description:'Zero-till Seed Drill, 11-row',
        price: 55_000,
        image:getImageUrl('/static/seed_Drill.jpeg') },

      { machineNumberPlate:'BW-07',
        type:'Baler',
        description:'Square Hay Baler',
        price: 260_000,
        image:getImageUrl('/static/square_hay_baler.jpeg')},

      { machineNumberPlate:'SP-08',
        type:'Spraying Machine',
        description:'Spraying Machine',
        price: 38_000,
        image:getImageUrl('/static/spraying_machine.jpg') }
    ];

    await Product.deleteMany({});
    await Product.insertMany(demo);
    res.json({ ok: true, count: demo.length });
  } catch (err) {
    next(err);
  }
};


// GET /api/products?sort=asc|desc
exports.list = async (req, res, next) => {
  try {
    const dir = req.query.sort === 'desc' ? -1 : 1;
    const products = await Product.find().sort({ price: dir });
    res.json(products);
  } catch (err) { next(err); }
};

// GET /api/products/:id
exports.one = async (req, res, next) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ msg:'Not found' });
    res.json(p);
  } catch (err) { next(err); }
};
