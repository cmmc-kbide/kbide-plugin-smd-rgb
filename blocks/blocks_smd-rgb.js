Blockly.Blocks["smd_rgb_block"] = {
    init: function() {
      this.appendDummyInput().appendField("SMD RGB");
      this.appendDummyInput()
        .appendField("RED PIN")
        .appendField(new Blockly.FieldTextInput("0"), "SMD_RGB_RED_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("SMD_RGB_RED_STATE"),
          "SMD_RGB_RED_STATE"
        );
      this.appendDummyInput()
        .appendField("GREEN PIN")
        .appendField(new Blockly.FieldTextInput("0"), "SMD_RGB_GREEN_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("SMD_RGB_GREEN_STATE"),
          "SMD_RGB_GREEN_STATE"
        );
      this.appendDummyInput()
        .appendField("BLUE PIN")
        .appendField(new Blockly.FieldTextInput("0"), "SMD_RGB_BLUE_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("SMD_RGB_BLUE_STATE"),
          "SMD_RGB_BLUE_STATE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };