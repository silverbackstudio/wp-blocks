/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	createBlock,
	getPhrasingContentSchema,
	getBlockAttributes,
	getBlockType,
	registerBlockType,
} = wp.blocks;

const {
	BlockControls,
	InnerBlocks,
	InspectorControls
} = wp.editor;

const { 
	Fragment 
} = wp.element;

const { 
	PanelBody,
	ToggleControl,
	TextControl	
} = wp.components;


registerBlockType( 'svbk/container', {
    title: 'Container',
	
	keywords: [ __( 'container' ), __( 'section' ), 'div' ],

    icon: 'editor-contract',

    category: 'layout',

	supports: {
		align: [ 'wide', 'full' ],
	}, 

    attributes: {
        htmlId: {
            type: 'string',
			source: 'attribute',
			selector: 'section',
			attribute: 'id',       
		},
        wrap: {
            type: 'boolean',
            default: false
        },        
    },
   
    edit: ( props ) => {
		const { attributes: { 
				wrap, 
				htmlId 
			}, 
			setAttributes, 
			className
		} = props;

        const onChangeWrap = ( hasWrapper ) => {
            setAttributes( { wrap: hasWrapper } );
        }

        const onChangeHtmlId = ( newId ) => {
            setAttributes( { htmlId: newId } );
        }

        return (
            <Fragment>
            	<InspectorControls>
                	<PanelBody title={ __( 'Settings' ) }>
                		<ToggleControl
                           	label = { "Wrap contents"} 
                            checked = { wrap }
                            onChange = { onChangeWrap}
                    	/>
                        <TextControl
                			label = { "HTML ID" }
                        	type = {"text"}
                            value = { htmlId }
                            onChange = { onChangeHtmlId }
                            min = { 1 }
                            max = { 6 }
                        />
                	</PanelBody>
       			</InspectorControls>
				<section 
					className = { className }
					id = { htmlId }
				>
					<InnerBlocks />
				</section>
			</Fragment>
        );
    },
    save: ( props ) => {
		const { attributes: { 
				wrap, 
				htmlId 
			}, 
			className
		} = props;

		if ( ! wrap ) {
			return ( 
				<section 
					className = { className }
					id = { htmlId }
				>
					<InnerBlocks.Content />
				</section>
			);
		} 
		
		return ( 
			<section 
				className = { className }
				id = { htmlId }
			>
				<div className = { 'content-wrapper' } >
					<InnerBlocks.Content />
				</div>
			</section>
		);
		
    },
} );
