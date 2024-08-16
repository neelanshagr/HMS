import  express from "express";
import { patientRegister, login, addNewAdmin, getAllDoctors, } from "../controller/userController.js";
import {isAdminAuthenticated, isPatientAuthenticated} from "../middlewares/auth.js"

const router = express.Router();

router.post("/patient/register",patientRegister);
router.post("/login", login);
router.post("/admin/addnew",isAdminAuthenticated, addNewAdmin);
router.get("/doctors", getAllDoctors);

export default router;   

// {
//   "firstName": "Neelansh",
//   "lastName": "Agrawal",
//   "email": "patient2@gmail.com",
//   "phone": "1234567890",
//   "UHID": "12345678901234",
//   "dob": "2002-07-16",
//   "gender": "Male",
//   "password": "12345678",
//   "Role":"Admin"
// }
