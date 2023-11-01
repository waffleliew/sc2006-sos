import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './app/controllers/auth.controller.js';
import foodPreferenceRoutes from './app/controllers/foodpreference.controller.js';
import groupFoodPreferenceRoutes from './app/controllers/foodpreference.controller.js';
import groupMemberRoutes from "./app/controllers/groupmember.controller.js";
import groupPictureRoutes from "./app/controllers/grouppicture.controller.js";
import groupRegionPreferenceRoutes from "./app/controllers/groupregionpreference.controller.js";
import groupRoutes from './app/controllers/group.controller.js';
import meetingRoutes from "./app/controllers/meeting.controller.js";
import regionPreferenceRoutes from "./app/controllers/regionpreference.controller.js";
import userRoutes from "./app/controllers/user.controller.js";
import userFoodPreferenceRoutes from "./app/controllers/userfoodpreference.controller.js";
import userRegionPreferenceRoutes from "./app/controllers/userregionpreference.controller.js";
import locationRoutes from "./app/controllers/location.controller.js";

const app = express();

/*
let corsOptions = {
    origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
*/

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', authRoutes);
app.use('/api', foodPreferenceRoutes);
app.use('/api', groupFoodPreferenceRoutes);
app.use('/api', groupMemberRoutes);
app.use('/api', groupPictureRoutes);
app.use('/api', groupRegionPreferenceRoutes);
app.use('/api', meetingRoutes);
app.use('/api', regionPreferenceRoutes);
app.use('/api', userRoutes);
app.use('/api', userFoodPreferenceRoutes);
app.use('/api', userRegionPreferenceRoutes);
app.use('/api', groupRoutes);
app.use('/api', locationRoutes);


app.get('/', (req, res) => {
    res.json({message: "Welcome to the application."});
    console.log(`Server is running on now.`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

});