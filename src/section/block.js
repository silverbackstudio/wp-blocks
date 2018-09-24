/**
 * BLOCK: section-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { isFinite, find, omit } = window.lodash;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { 
	PanelBody, 
	RangeControl,
	withFallbackStyles,
	Button, 
	Spinner, 
	ResponsiveWrapper,
	ToggleControl,
} = wp.components;
const { Fragment } = wp.element;
const { compose } = wp.compose;
const {
	InspectorControls,
	InnerBlocks,
	PanelColor,
	withColors,
	MediaUpload,
} = wp.editor;

const { getComputedStyle } = window;

const FallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { backgroundColor } = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	//verify if editableNode is available, before using getComputedStyle.
	const computedStyles = editableNode ? getComputedStyle( editableNode ) : null;
	return {
		fallbackBackgroundColor: backgroundColor || ! computedStyles ? undefined : computedStyles.backgroundColor,
		// fallbackTextColor: textColor || ! computedStyles ? undefined : computedStyles.color,
		// fallbackFontSize: fontSize || customFontSize || ! computedStyles ? undefined : parseInt( computedStyles.fontSize ) || undefined,
	};
} );

// data-align="full"
const Edit = ( props ) => {
	// Creates a <p class='wp-block-cgb-block-section-block'></p>.
	const {
		attributes,
		setAttributes,
		className,
		setBackgroundColor,
		fallbackBackgroundColor,
		toggleSelection,
		media
	} = props;

	const onSelectBgImage = ( media ) => {
		setAttributes( {
			bgImage: {
				id: media.id,
				image: media.sizes.large || media.sizes.full,
			}
		} )
	}

	const onRemoveBgImage = () => {
		setAttributes( {
			bgImage: null
		} )
	}

	const { backgroundColor, customBackgroundColor, resizeTopIsActive, resizeBottomIsActive, bgImage, bgOptions } = attributes

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={ __( 'Spacing' ) }
					initialOpen={ false }
				>
					<RangeControl
						label={ __( 'Spacing top' ) }
						value={ attributes.spacingTop }
						onChange={ ( nextSpacing ) => {
							setAttributes( {
								spacingTop: nextSpacing,
							} );
						} }
						min={ 0 }
						max={ 200 }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Spacing bottom' ) }
						value={ attributes.spacingBottom }
						onChange={ ( nextSpacing ) => {
							setAttributes( {
								spacingBottom: nextSpacing,
							} );
						} }
						min={ 0 }
						max={ 200 }
						step={ 10 }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Background image' ) }
					initialOpen={ false }
				>
					{ ! bgImage &&
						<div>
							<MediaUpload
								title={ __('Set background image') }
								onSelect={ onSelectBgImage }
								type="image"
								modalClass="editor-post-featured-image__media-modal"
								render={ ( { open } ) => (
									<Button className="editor-post-featured-image__toggle" onClick={ open }>
										{ __( 'Set background image' ) }
									</Button>
								) }
							/>
						</div>
					}
					{ !! bgImage && <MediaUpload
						title={ __( 'Set background image' ) }
						onSelect={ onSelectBgImage }
						type="image"
						value={ bgImage.id }
						modalClass="editor-post-featured-image__media-modal"
						render={ ( { open } ) => (
							<div className="editor-bg-image">
								<Button className="editor-post-featured-image__preview" onClick={ open }>
									<ResponsiveWrapper
										naturalWidth={ bgImage.image.width }
										naturalHeight={ bgImage.image.height }
									>
										<img src={ bgImage.image.url } alt={ __( 'BG Image' ) } />
									</ResponsiveWrapper>
								</Button>
								<Button onClick={ open } isDefault isLarge>
									{ __( 'Replace image' ) }
								</Button>
								<Button onClick={ onRemoveBgImage } isLink isDestructive>
									{ __('Remove background image') }
								</Button>
							</div>
						) }
					/>
					}
					{ !! bgImage && <div className="section-bg-settings">
						<RangeControl
							label={ __( 'Opacity' ) }
							value={ bgOptions.opacity * 100 }
							onChange={ ( nextOpacity ) => {
								setAttributes( {
									bgOptions: {
										...bgOptions,
										opacity: nextOpacity / 100,
									},
								} );
							} }
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
						<ToggleControl
							label={ __( 'Fixed Background' ) }
							checked={ !! bgOptions.fixed }
							onChange={ ( nextFixed ) => {
								setAttributes( {
									bgOptions: {
										...bgOptions,
										fixed: nextFixed,
									},
								} );
							} }
						/>
						{ ! bgOptions.fixed && <ToggleControl
								label={ __( 'Stretch Background' ) }
								checked={ !! bgOptions.stretch }
								onChange={ ( nextStretch ) => {
									setAttributes( {
										bgOptions: {
											...bgOptions,
											stretch: nextStretch,
										},
									} );
								} }
							/>
						}
						{ ( ! bgOptions.fixed && ! bgOptions.stretch )  && <ToggleControl
								label={ __( 'Repeat Background' ) }
								checked={ !! bgOptions.repeat }
								onChange={ ( nextRepeat ) => {
									setAttributes( {
										bgOptions: {
											...bgOptions,
											repeat: nextRepeat,
										},
									} );
								} }
							/>
						}
					</div>}
				</PanelBody>
				<PanelColor
					colorValue={ customBackgroundColor }
					initialOpen={ false }
					title={ __( 'Background Color' ) }
					onChange={ ( nextColor, ...whatelse ) => {
						console.log('before:', backgroundColor, whatelse);
						setBackgroundColor( nextColor );
						setAttributes(
							{
								customBackgroundColor: nextColor
							}
						)
						console.log('now:', backgroundColor, nextColor);
					} }
				/>
			</InspectorControls>
			<section
				className={ props.className }
				style={ {
					backgroundColor: customBackgroundColor,
				} }
			>
				{ !! bgImage && <div
					className= {'section-bg'}
					style={ {
						backgroundImage: bgImage ? 'url(' + bgImage.image.url + ')' : undefined,
						opacity: bgOptions.opacity
					} }
				/> }
				<InnerBlocks />
			</section>
		</Fragment>
	);
}
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'mkl/section-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Section (deprecated)' ), // Block title.
	icon: 'align-center', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'section' ),
		__( 'container' ),
	],
	supports: {
		inserter: false,
	},	
	attributes: {
		spacingTop: {
			type: 'number',
			default: 60
		},
		spacingBottom: {
			type: 'number',
			default: 60
		},
		backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
		bgImage: {
			type: 'object',
			default: null,
		},
		bgOptions: {
			type: 'object',
			default: {
				repeat: false,
				stretch: true,
				fixed: false,
				opacity: 0.5,
			}
		},
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: Edit,


	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( { attributes, className }) {
		const { 
			backgroundColor,
			customBackgroundColor,
			spacingBottom,
			spacingTop,
			bgImage,
			bgOptions
		} = attributes;
		const backgroundClass = null;
		const classes = className

		const styles = {
			backgroundColor: backgroundClass ? undefined : customBackgroundColor,
			paddingBottom: spacingBottom ? spacingBottom : undefined,
			paddingTop: spacingTop ? spacingTop : undefined,
		}
		return (
			<section className={ classes ? classes : undefined } style={ styles }>
				{ !! bgImage && <div
					className={ 'section-bg' }
					style={ {
						backgroundImage: bgImage ? 'url(' + bgImage.image.url + ')' : undefined,
						opacity: bgOptions.opacity
					} }
				/> }
				<InnerBlocks.Content />
			</section>
		);
	},

	/**
	 * wrapper props
	 * @param {*} attributes 
	 */
	getEditWrapperProps( attributes ) {
		return { 'data-align': 'full' };
	},
} );
