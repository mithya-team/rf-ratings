# rf-ratings

A package that runs on top of [react-forms](https://github.com/mithyalabs/ml-react-forms) and provides a ratings input field.
The package uses material-ui/lab and is somewhat experimental in the sense material-ui/lab is experimental.

## Dependencies

1. react-forms
2. formik
3. lodash
4. material-ui/lab
5. material-ui/core

## How to use:

To use the basic component add the following to your react-forms config:

``` 
{
	type:'rating',
	valueKey:'MyValueKey',
	fieldProps:{ }
}
```

The component runs on top of the [Rating](https://material-ui.com/components/rating/#rating) component from material-ui/lab and the fieldProps can take the following properties:

``` 
{
	ratingProps: RatingProps,
	icons?: JSX.Element[]
	labels?: string[]
	header?: string
	headerProps?: TypographyProps
	containerProps?: BoxProps
}
```
ratingProps are passed to the native rating component and header is displayed like a label by default. icons will specify the icons to be used for rating. If you intend to use more or less than 5 icons, you will also have to specify the max property. If you intend to use only 1 icon for all the ratings, then icons can be set to an array with a single item. 