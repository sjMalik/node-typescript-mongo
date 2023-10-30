import express from 'express';

export const app = express();

app.set('port', process.env.PORT || 3000);