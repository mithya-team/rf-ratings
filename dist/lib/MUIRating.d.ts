import React from 'react';
import { RatingProps } from '@material-ui/lab';
import { IFieldProps } from 'react-forms';
export interface IMUIRating extends RatingProps {
    icons?: JSX.Element[];
    labels?: string[];
    description?: string;
}
export interface IProps extends IFieldProps {
    fieldProps?: IMUIRating;
}
export declare const MUIRating: React.FC<IProps>;
