import React, { ElementType } from 'react';
import { IconContainerProps, Rating, RatingProps as MaterialRatingProps } from '@material-ui/lab'
import { Box, BoxProps, Typography, TypographyProps } from '@material-ui/core';
import { IFieldProps } from 'react-forms'
import { FormikValues } from 'formik';
import _ from 'lodash';

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
	const { fieldProps = {} as MUIRatingProps, formikProps = {} as FormikValues } = props
	const { icons, labels, header = '', ratingProps, headerProps, containerProps } = fieldProps
	const getIconContainer = (IconProps: IconContainerProps) => {
		const { value, ...others } = IconProps
		console.log("icons returned")
		if (icons && value < icons.length)
			return <span {...others} >{icons[value]}</span>
		if (icons && icons.length)
			return <span {...others} >{icons[0]}</span>
		return <span></span>
	}
	//@ts-ignore
	const handleChange = (event: React.ChangeEvent<{}>, value: number | null) => {
		formikProps.setFieldValue(_.get(fieldProps, 'name'), value)
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
	return <>
		<Box {...containerConfig}>
			<Typography {...headerProps} >{header}</Typography>
			<><Rating {...config} /></>
		</Box>
	</>
}