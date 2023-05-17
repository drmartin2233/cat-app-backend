const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to mongoDB Atlas');
}

main().catch(err => console.log(err));

