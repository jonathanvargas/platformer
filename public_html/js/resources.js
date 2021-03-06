game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        { name: "background-tiles", type: "image", src: "data/img/background-tiles.png" },
        { name: "item-spritesheet", type:"image", src: "data/img/item-spritesheet.png"},
        { name: "player1-spritesheet", type: "image", src: "data/img/player1-spritesheet.png"},
        { name: "meta-tiles", type: "image", src: "data/img/meta-tiles.png" },
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        { name: "Level1", type:"tmx", src: "data/map/Level1.tmx"},
        { name: "Level2", type:"tmx", src: "data/map/Level2.tmx"}

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
];
