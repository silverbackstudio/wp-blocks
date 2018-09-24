var el = wp.element.createElement,
    Fragment = wp.element.Fragment,
    registerBlockType = wp.blocks.registerBlockType,
    BlockControls = wp.editor.BlockControls,
    AlignmentToolbar = wp.editor.AlignmentToolbar,
	InnerBlocks = wp.editor.InnerBlocks,
	TextControl = wp.components.TextControl,
	ToggleControl = wp.components.ToggleControl,
	InspectorControls = wp.editor.InspectorControls,
	createBlock = wp.blocks.createBlock,
	getBlockAttributes = wp.blocks.getBlockAttributes,
	getBlockType = wp.blocks.getBlockType,
	PanelBody  = wp.components.PanelBody;

registerBlockType( 'svbk/container', {
    title: 'Container',

    icon: 'universal-access-alt',

    category: 'layout',

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
    
    edit: function( props ) {
        var wrap = props.attributes.wrap,
            htmlId = props.attributes.htmlId;

        function onChangeWrap( hasWrapper ) {
            props.setAttributes( { wrap: hasWrapper } );
        }

        function onChangeHtmlId( newId ) {
            props.setAttributes( { htmlId: newId } );
        }

        return (
            el(
                Fragment,
                null,
                el(
                    InspectorControls,
                    null,
                    el(
                    	PanelBody,
                    	null,
                   		el(
	                        ToggleControl,
	                        {
	                        	label: "Wrap contents",
	                            checked: wrap,
	                            onChange: onChangeWrap,
	                        }
                        ),   
                    	el(
	                        TextControl,
	                        {
	                        	label: "HTML ID",
	                        	type: "text",
	                            value: htmlId,
	                            onChange: onChangeHtmlId,
	                            min: 1,
	                            max: 6
	                        }
                        )                        
                    )
                ),
				el( 
					'section', 
					{
						className: props.className,
						id: htmlId
					},
					wrap ? (
						el(
							'div', 
							{
								className: 'content-wrapper'
							}, 
							el( 
								InnerBlocks
							)	
						)
					) : (
						el (
							InnerBlocks
						)
					)
				)
            )
        );
    },

    save: function( props ) {
        var wrap = props.attributes.wrap,
            htmlId = props.attributes.htmlId;

		return el(
			'section', 
			{
				className: props.className,
				id: htmlId
			}, 
			wrap ? ( 
				el(
					'div', 
					{
						className: 'content-wrapper'
					}, 
					el( 
						InnerBlocks.Content
					)
				)
			) : (
				el(
					InnerBlocks.Content				
				)
			)
		);
    },
} );
