<?php
/**
 * Plugin Name: Gutenberg Silverback Blocks
 * Plugin URI: https://github.com/silverbackstudio/wp-blocks
 * Description: Silverback Gurtenberge Plugins Collection
 * Author: Silverback Studio
 * Author URI: https://www.silverbackstudio.it/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package svbk-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
