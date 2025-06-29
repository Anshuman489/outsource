const Allocation = require('../models/Allocation');

exports.create = async (req, res, next) => {
  try {
    const { productId, vleName, vlePhone, village, allocationDate } = req.body;
    if (!productId || !vleName || !vlePhone || !village)
      return res.status(400).json({ msg:'Missing fields' });

    const alloc = await Allocation.create({
      productId, vleName, vlePhone, village,
      allocationDate: allocationDate || Date.now()
    });

    res.status(201).json(alloc);
  } catch (err) { next(err); }
};

// optional admin list
exports.list = async (_req, res, next) => {
  try {
    const list = await Allocation.find()
      .populate('productId','machineNumberPlate type description');
    res.json(list);
  } catch (err) { next(err); }
};
