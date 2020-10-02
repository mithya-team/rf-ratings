import React from 'react';
import { IconContainerProps, Rating, RatingProps } from '@material-ui/lab'
import { Box, Typography } from '@material-ui/core';
import { attachField, IFieldProps } from 'react-forms'
import { FormikValues } from 'formik';
import _ from 'lodash';

export interface IMUIRating extends RatingProps {
	icons?: JSX.Element[]
	labels?: string[]
	description?: string
}

export interface IProps extends IFieldProps {
	fieldProps?: IMUIRating
}

export const MUIRating: React.FC<IProps> = (props: IProps) => {
	const { fieldProps = {} as IMUIRating, formikProps = {} as FormikValues } = props
	const { icons, defaultValue, labels, description = '', } = fieldProps
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
		defaultValue,
		getLabelText: labels ? getLabelText : undefined,
		onChange: handleChange,
		...props
	}
	return <><Box component="fieldset" mb={3} borderColor="transparent">
		<Typography component="legend">{description}</Typography>
		<Rating {...config} />
	</Box> </>
}

attachField('rating', <MUIRating />)
