import React from 'react';
import { RatingProps as MaterialRatingProps } from '@material-ui/lab';
import { IFieldProps } from 'react-forms';
export interface MUIRatingProps extends MaterialRatingProps {
    icons?: JSX.Element[];
    labels?: string[];
    description?: string;
}
export interface RatingProps extends IFieldProps {
    fieldProps?: MUIRatingProps;
}
export declare const MUIRating: React.FC<RatingProps>;
