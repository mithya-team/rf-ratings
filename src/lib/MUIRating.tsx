import React, { ElementType } from 'react';
import { IconContainerProps, Rating, RatingProps as MaterialRatingProps } from '@material-ui/lab'
import { Box, BoxProps, Typography, TypographyProps } from '@material-ui/core';
import { getFieldError, IFieldProps } from 'react-forms'
import { FormikValues } from 'formik';

export interface MUIRatingProps {
	ratingProps: MaterialRatingProps,
	icons?: JSX.Element[]
	labels?: string[]
	header?: string
	headerProps?: TypographyProps
	containerProps?: BoxProps
}

export interface RatingProps extends IFieldProps {
	fieldProps?: MUIRatingProps
}

export const MUIRating: React.FC<RatingProps> = (props: RatingProps) => {
	const { fieldProps = {} as MUIRatingProps, formikProps = {} as FormikValues, fieldConfig } = props
	const { icons, labels, header = '', ratingProps, headerProps, containerProps } = fieldProps
	const valuekey = fieldConfig?.valueKey || '';
	const getIconContainer = (IconProps: IconContainerProps) => {
		const { value, ...others } = IconProps
		if (icons && value < icons.length)
			return <span {...others} >{icons[value]}</span>
		if (icons && icons.length)
			return <span {...others} >{icons[0]}</span>
		return <span></span>
	}
	//@ts-ignore
	const handleChange = (event: React.ChangeEvent<{}>, value: number | null) => {
		formikProps.setFieldValue(valuekey, value)
	}
	const getLabelText = (value: number) => {
		if (labels && value < labels.length)
			return labels[value]
		if (labels && labels.length)
			return labels[0]
		return ""
	}
	const config = {
		IconContainerComponent: icons ? getIconContainer : undefined,
		getLabelText: labels ? getLabelText : undefined,
		onChange: handleChange,
		...ratingProps,
	}
	const containerConfig = {
		component: 'div' as ElementType,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		...containerProps
	}
	const helperText = getFieldError(valuekey, formikProps);
	const error = !!helperText;
	return <>
		<Box {...containerConfig}>
			<Typography {...headerProps} >{header}</Typography>
			<><Rating {...config} /></>
			{error ? <Typography variant='caption' color='error'>{helperText}</Typography> : null}
		</Box>
	</>
}