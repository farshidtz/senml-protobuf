// source: senml.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.senml_proto.Record');
goog.provide('proto.senml_proto.Record.ValueType');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.senml_proto.Record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.senml_proto.Record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.senml_proto.Record.displayName = 'proto.senml_proto.Record';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.senml_proto.Record.prototype.toObject = function(opt_includeInstance) {
  return proto.senml_proto.Record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.senml_proto.Record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.senml_proto.Record.toObject = function(includeInstance, msg) {
  var f, obj = {
    basename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basetime: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    baseunit: jspb.Message.getFieldWithDefault(msg, 3, ""),
    baseversion: jspb.Message.getFieldWithDefault(msg, 4, 0),
    basevalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    basesum: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    name: jspb.Message.getFieldWithDefault(msg, 7, ""),
    unit: jspb.Message.getFieldWithDefault(msg, 8, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    updatetime: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 11, ""),
    datavalue: jspb.Message.getFieldWithDefault(msg, 12, ""),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    sum: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    type: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.senml_proto.Record}
 */
proto.senml_proto.Record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.senml_proto.Record;
  return proto.senml_proto.Record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.senml_proto.Record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.senml_proto.Record}
 */
proto.senml_proto.Record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasename(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBasetime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseunit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBaseversion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBasevalue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBasesum(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTime(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUpdatetime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatavalue(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSum(value);
      break;
    case 15:
      var value = /** @type {!proto.senml_proto.Record.ValueType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.senml_proto.Record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.senml_proto.Record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.senml_proto.Record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.senml_proto.Record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasetime();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getBaseunit();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBaseversion();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBasevalue();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getBasesum();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getUpdatetime();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDatavalue();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getBoolvalue();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getSum();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.senml_proto.Record.ValueType = {
  FLOAT: 0,
  STRING: 1,
  BINARY: 2,
  BOOL: 3,
  SUM: 4
};

/**
 * optional string baseName = 1;
 * @return {string}
 */
proto.senml_proto.Record.prototype.getBasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setBasename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double baseTime = 2;
 * @return {number}
 */
proto.senml_proto.Record.prototype.getBasetime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setBasetime = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string baseUnit = 3;
 * @return {string}
 */
proto.senml_proto.Record.prototype.getBaseunit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setBaseunit = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 baseVersion = 4;
 * @return {number}
 */
proto.senml_proto.Record.prototype.getBaseversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setBaseversion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double baseValue = 5;
 * @return {number}
 */
proto.senml_proto.Record.prototype.getBasevalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setBasevalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double baseSum = 6;
 * @return {number}
 */
proto.senml_proto.Record.prototype.getBasesum = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setBasesum = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.senml_proto.Record.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string unit = 8;
 * @return {string}
 */
proto.senml_proto.Record.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional double time = 9;
 * @return {number}
 */
proto.senml_proto.Record.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double updateTime = 16;
 * @return {number}
 */
proto.senml_proto.Record.prototype.getUpdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setUpdatetime = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional double value = 10;
 * @return {number}
 */
proto.senml_proto.Record.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional string stringValue = 11;
 * @return {string}
 */
proto.senml_proto.Record.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string dataValue = 12;
 * @return {string}
 */
proto.senml_proto.Record.prototype.getDatavalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setDatavalue = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool boolValue = 13;
 * @return {boolean}
 */
proto.senml_proto.Record.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional double sum = 14;
 * @return {number}
 */
proto.senml_proto.Record.prototype.getSum = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setSum = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional ValueType type = 15;
 * @return {!proto.senml_proto.Record.ValueType}
 */
proto.senml_proto.Record.prototype.getType = function() {
  return /** @type {!proto.senml_proto.Record.ValueType} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.senml_proto.Record.ValueType} value
 * @return {!proto.senml_proto.Record} returns this
 */
proto.senml_proto.Record.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};

