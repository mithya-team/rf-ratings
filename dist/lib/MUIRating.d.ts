import React from 'react';
import { RatingProps as MaterialRatingProps } from '@material-ui/lab';
import { BoxProps, TypographyProps } from '@material-ui/core';
import { IFieldProps } from 'react-forms';
export interface MUIRatingProps {
    ratingProps: MaterialRatingProps;
    icons?: JSX.Element[];
    labels?: string[];
    header?: string;
    headerProps?: TypographyProps;
    containerProps?: BoxProps;
}
export interface RatingProps extends IFieldProps {
    fieldProps?: MUIRatingProps;
}
export declare const MUIRating: React.FC<RatingProps>;
