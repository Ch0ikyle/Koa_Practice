import Joi from 'joi';
import Account from 'models/Account';

export const localRegister = async (ctx) => {
    ctx.body = 'register';
};

export const localLogin = async (ctx) => {
    ctx.body = 'login';
};

export const exists = async (ctx) => {
    ctx.body = 'exists';
};

export const logout = async (ctx) => {
    ctx.body = 'logout';
};