import express, { Application } from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from '../middleware/ErrorHandler';
import { apiLimiter, authLimiter } from '../middleware/RateLimit';

import {AdminRoute, DeliveryRoute, VandorRoute} from '../routes';
import { CustomerRoute } from '../routes/CustomerRoute';
import { ShoppingRoute } from '../routes/ShoppingRoutes';
 
export default async(app: Application) => {
    // Request logging
    app.use(morgan('dev'));
    
    // CORS middleware
    app.use(cors());
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    
    const imagePath = path.join(__dirname,'../images');
    
    app.use('/images', express.static(imagePath));
    
    app.use('/admin', AdminRoute);
    app.use('/vendor', VandorRoute);
    app.use('/customer', CustomerRoute);
    app.use('/delivery', DeliveryRoute);
    app.use(ShoppingRoute);
    
    // Rate limiting
    app.use(apiLimiter);
    
    // Apply stricter rate limiting to auth routes
    app.use('/vendor/login', authLimiter);
    app.use('/customer/login', authLimiter);
    app.use('/customer/signup', authLimiter);
    app.use('/delivery/login', authLimiter);
    
    // Error handling middleware (should be last)
    app.use(errorHandler);
    
    // 404 handler
    app.use((req, res) => {
        res.status(404).json({ message: 'Not found' });
    });

    return app;
}

