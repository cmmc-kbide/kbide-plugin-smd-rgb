Blockly.JavaScript["smd_rgb_block"] = function(block) {
    var text_smd_rgb_red_pin = block.getFieldValue("SMD_RGB_RED_PIN");
    var variable_smd_rgb_red_state = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("SMD_RGB_RED_STATE"),
      Blockly.Variables.NAME_TYPE
    );
    var text_smd_rgb_green_pin = block.getFieldValue("SMD_RGB_GREEN_PIN");
    var variable_smd_rgb_green_state = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("SMD_RGB_GREEN_STATE"),
      Blockly.Variables.NAME_TYPE
    );
    var text_smd_rgb_blue_pin = block.getFieldValue("SMD_RGB_BLUE_PIN");
    var variable_smd_rgb_blue_state = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("SMD_RGB_BLUE_STATE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
	int SMD_RGB_RED_PIN = ${text_smd_rgb_red_pin}; //select the pin for the red LED
	int SMD_RGB_BLUE_PIN = ${text_smd_rgb_blue_pin}; // select the pin for the  blue LED
	int SMD_RGB_GREEN_PIN = ${text_smd_rgb_green_pin};// select the pin for the green LED
	#END

	#SETUP
	  pinMode(SMD_RGB_RED_PIN, OUTPUT);
	  pinMode(SMD_RGB_BLUE_PIN, OUTPUT);
	  pinMode(SMD_RGB_GREEN_PIN, OUTPUT);
	#END

	${variable_smd_rgb_red_state} = SMD_RGB_RED_PIN;
	${variable_smd_rgb_green_state} = SMD_RGB_GREEN_PIN;
	${variable_smd_rgb_blue_state} = SMD_RGB_BLUE_PIN;
    `;
    return code;
  };