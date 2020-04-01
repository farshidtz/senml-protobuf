<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: senml.proto

namespace Senml_protobuf;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>senml_protobuf.Record</code>
 */
class Record extends \Google\Protobuf\Internal\Message
{
    /**
     * base meta fields
     *
     * Generated from protobuf field <code>string baseName = 1;</code>
     */
    protected $baseName = '';
    /**
     * Generated from protobuf field <code>double baseTime = 2;</code>
     */
    protected $baseTime = 0.0;
    /**
     * Generated from protobuf field <code>string baseUnit = 3;</code>
     */
    protected $baseUnit = '';
    /**
     * Generated from protobuf field <code>int32 baseVersion = 4;</code>
     */
    protected $baseVersion = 0;
    /**
     * meta fields
     *
     * Generated from protobuf field <code>string name = 7;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string unit = 8;</code>
     */
    protected $unit = '';
    /**
     * Generated from protobuf field <code>double time = 9;</code>
     */
    protected $time = 0.0;
    /**
     * Generated from protobuf field <code>double updateTime = 10;</code>
     */
    protected $updateTime = 0.0;
    protected $baseValueOptional;
    protected $baseSumOptional;
    protected $valueOneof;
    protected $sumOptional;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $baseName
     *           base meta fields
     *     @type float $baseTime
     *     @type string $baseUnit
     *     @type int $baseVersion
     *     @type float $baseValue
     *     @type float $baseSum
     *     @type string $name
     *           meta fields
     *     @type string $unit
     *     @type float $time
     *     @type float $updateTime
     *     @type float $value
     *     @type string $stringValue
     *     @type string $dataValue
     *     @type bool $boolValue
     *     @type float $sum
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Senml::initOnce();
        parent::__construct($data);
    }

    /**
     * base meta fields
     *
     * Generated from protobuf field <code>string baseName = 1;</code>
     * @return string
     */
    public function getBaseName()
    {
        return $this->baseName;
    }

    /**
     * base meta fields
     *
     * Generated from protobuf field <code>string baseName = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setBaseName($var)
    {
        GPBUtil::checkString($var, True);
        $this->baseName = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double baseTime = 2;</code>
     * @return float
     */
    public function getBaseTime()
    {
        return $this->baseTime;
    }

    /**
     * Generated from protobuf field <code>double baseTime = 2;</code>
     * @param float $var
     * @return $this
     */
    public function setBaseTime($var)
    {
        GPBUtil::checkDouble($var);
        $this->baseTime = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string baseUnit = 3;</code>
     * @return string
     */
    public function getBaseUnit()
    {
        return $this->baseUnit;
    }

    /**
     * Generated from protobuf field <code>string baseUnit = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setBaseUnit($var)
    {
        GPBUtil::checkString($var, True);
        $this->baseUnit = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 baseVersion = 4;</code>
     * @return int
     */
    public function getBaseVersion()
    {
        return $this->baseVersion;
    }

    /**
     * Generated from protobuf field <code>int32 baseVersion = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setBaseVersion($var)
    {
        GPBUtil::checkInt32($var);
        $this->baseVersion = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double baseValue = 5;</code>
     * @return float
     */
    public function getBaseValue()
    {
        return $this->readOneof(5);
    }

    /**
     * Generated from protobuf field <code>double baseValue = 5;</code>
     * @param float $var
     * @return $this
     */
    public function setBaseValue($var)
    {
        GPBUtil::checkDouble($var);
        $this->writeOneof(5, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>double baseSum = 6;</code>
     * @return float
     */
    public function getBaseSum()
    {
        return $this->readOneof(6);
    }

    /**
     * Generated from protobuf field <code>double baseSum = 6;</code>
     * @param float $var
     * @return $this
     */
    public function setBaseSum($var)
    {
        GPBUtil::checkDouble($var);
        $this->writeOneof(6, $var);

        return $this;
    }

    /**
     * meta fields
     *
     * Generated from protobuf field <code>string name = 7;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * meta fields
     *
     * Generated from protobuf field <code>string name = 7;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string unit = 8;</code>
     * @return string
     */
    public function getUnit()
    {
        return $this->unit;
    }

    /**
     * Generated from protobuf field <code>string unit = 8;</code>
     * @param string $var
     * @return $this
     */
    public function setUnit($var)
    {
        GPBUtil::checkString($var, True);
        $this->unit = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double time = 9;</code>
     * @return float
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * Generated from protobuf field <code>double time = 9;</code>
     * @param float $var
     * @return $this
     */
    public function setTime($var)
    {
        GPBUtil::checkDouble($var);
        $this->time = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double updateTime = 10;</code>
     * @return float
     */
    public function getUpdateTime()
    {
        return $this->updateTime;
    }

    /**
     * Generated from protobuf field <code>double updateTime = 10;</code>
     * @param float $var
     * @return $this
     */
    public function setUpdateTime($var)
    {
        GPBUtil::checkDouble($var);
        $this->updateTime = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double value = 11;</code>
     * @return float
     */
    public function getValue()
    {
        return $this->readOneof(11);
    }

    /**
     * Generated from protobuf field <code>double value = 11;</code>
     * @param float $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkDouble($var);
        $this->writeOneof(11, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>string stringValue = 12;</code>
     * @return string
     */
    public function getStringValue()
    {
        return $this->readOneof(12);
    }

    /**
     * Generated from protobuf field <code>string stringValue = 12;</code>
     * @param string $var
     * @return $this
     */
    public function setStringValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(12, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>string dataValue = 13;</code>
     * @return string
     */
    public function getDataValue()
    {
        return $this->readOneof(13);
    }

    /**
     * Generated from protobuf field <code>string dataValue = 13;</code>
     * @param string $var
     * @return $this
     */
    public function setDataValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(13, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool boolValue = 14;</code>
     * @return bool
     */
    public function getBoolValue()
    {
        return $this->readOneof(14);
    }

    /**
     * Generated from protobuf field <code>bool boolValue = 14;</code>
     * @param bool $var
     * @return $this
     */
    public function setBoolValue($var)
    {
        GPBUtil::checkBool($var);
        $this->writeOneof(14, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>double sum = 15;</code>
     * @return float
     */
    public function getSum()
    {
        return $this->readOneof(15);
    }

    /**
     * Generated from protobuf field <code>double sum = 15;</code>
     * @param float $var
     * @return $this
     */
    public function setSum($var)
    {
        GPBUtil::checkDouble($var);
        $this->writeOneof(15, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getBaseValueOptional()
    {
        return $this->whichOneof("baseValueOptional");
    }

    /**
     * @return string
     */
    public function getBaseSumOptional()
    {
        return $this->whichOneof("baseSumOptional");
    }

    /**
     * @return string
     */
    public function getValueOneof()
    {
        return $this->whichOneof("valueOneof");
    }

    /**
     * @return string
     */
    public function getSumOptional()
    {
        return $this->whichOneof("sumOptional");
    }

}

