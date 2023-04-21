import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "./OLDuserService";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        return await userService.login(credentials);
    }
);

export const profileThunk = createAsyncThunk(
    "user/profile", async () => {
        return await userService.profile();
    });


export const logoutThunk = createAsyncThunk(
    "user/logout", async () => {
        return await userService.logout();
    });


export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await userService.updateUser(user);
        return user;
    }
);
