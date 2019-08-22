Blockly.Blocks['smd_rgb_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SMD RGB");
    this.appendValueInput("SMD_RGB_R_PIN")
        .setCheck("Number")
        .appendField("RED PIN");
    this.appendValueInput("SMD_RGB_G_PIN")
        .setCheck("Number")
        .appendField("GREEN PIN");
    this.appendValueInput("SMD_RGB_B_PIN")
        .setCheck("Number")
        .appendField("BLUE PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};