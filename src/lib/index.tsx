import React from 'react';
import { attachField } from 'react-forms';
import { MUIRating } from './MUIRating';
export * from './MUIRating'

attachField('rating', <MUIRating />)