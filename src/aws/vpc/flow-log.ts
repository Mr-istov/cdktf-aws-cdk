// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface FlowLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#eni_id FlowLog#eni_id}
  */
  readonly eniId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#iam_role_arn FlowLog#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_destination FlowLog#log_destination}
  */
  readonly logDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_destination_type FlowLog#log_destination_type}
  */
  readonly logDestinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_format FlowLog#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_group_name FlowLog#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#max_aggregation_interval FlowLog#max_aggregation_interval}
  */
  readonly maxAggregationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#subnet_id FlowLog#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#tags FlowLog#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#tags_all FlowLog#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#traffic_type FlowLog#traffic_type}
  */
  readonly trafficType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#vpc_id FlowLog#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * destination_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#destination_options FlowLog#destination_options}
  */
  readonly destinationOptions?: FlowLogDestinationOptions;
}
export interface FlowLogDestinationOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#file_format FlowLog#file_format}
  */
  readonly fileFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#hive_compatible_partitions FlowLog#hive_compatible_partitions}
  */
  readonly hiveCompatiblePartitions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#per_hour_partition FlowLog#per_hour_partition}
  */
  readonly perHourPartition?: boolean | cdktf.IResolvable;
}

export function flowLogDestinationOptionsToTerraform(struct?: FlowLogDestinationOptionsOutputReference | FlowLogDestinationOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    hive_compatible_partitions: cdktf.booleanToTerraform(struct!.hiveCompatiblePartitions),
    per_hour_partition: cdktf.booleanToTerraform(struct!.perHourPartition),
  }
}

export class FlowLogDestinationOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file_format - computed: false, optional: true, required: false
  private _fileFormat?: string | undefined; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string | undefined) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat
  }

  // hive_compatible_partitions - computed: false, optional: true, required: false
  private _hiveCompatiblePartitions?: boolean | cdktf.IResolvable | undefined; 
  public get hiveCompatiblePartitions() {
    return this.getBooleanAttribute('hive_compatible_partitions') as any;
  }
  public set hiveCompatiblePartitions(value: boolean | cdktf.IResolvable | undefined) {
    this._hiveCompatiblePartitions = value;
  }
  public resetHiveCompatiblePartitions() {
    this._hiveCompatiblePartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveCompatiblePartitionsInput() {
    return this._hiveCompatiblePartitions
  }

  // per_hour_partition - computed: false, optional: true, required: false
  private _perHourPartition?: boolean | cdktf.IResolvable | undefined; 
  public get perHourPartition() {
    return this.getBooleanAttribute('per_hour_partition') as any;
  }
  public set perHourPartition(value: boolean | cdktf.IResolvable | undefined) {
    this._perHourPartition = value;
  }
  public resetPerHourPartition() {
    this._perHourPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perHourPartitionInput() {
    return this._perHourPartition
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log}
*/
export class FlowLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_flow_log";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowLogConfig
  */
  public constructor(scope: Construct, id: string, config: FlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_flow_log',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eniId = config.eniId;
    this._iamRoleArn = config.iamRoleArn;
    this._logDestination = config.logDestination;
    this._logDestinationType = config.logDestinationType;
    this._logFormat = config.logFormat;
    this._logGroupName = config.logGroupName;
    this._maxAggregationInterval = config.maxAggregationInterval;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._trafficType = config.trafficType;
    this._vpcId = config.vpcId;
    this._destinationOptions = config.destinationOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // eni_id - computed: false, optional: true, required: false
  private _eniId?: string | undefined; 
  public get eniId() {
    return this.getStringAttribute('eni_id');
  }
  public set eniId(value: string | undefined) {
    this._eniId = value;
  }
  public resetEniId() {
    this._eniId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniIdInput() {
    return this._eniId
  }

  // iam_role_arn - computed: false, optional: true, required: false
  private _iamRoleArn?: string | undefined; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string | undefined) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_destination - computed: true, optional: true, required: false
  private _logDestination?: string | undefined; 
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string | undefined) {
    this._logDestination = value;
  }
  public resetLogDestination() {
    this._logDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination
  }

  // log_destination_type - computed: false, optional: true, required: false
  private _logDestinationType?: string | undefined; 
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }
  public set logDestinationType(value: string | undefined) {
    this._logDestinationType = value;
  }
  public resetLogDestinationType() {
    this._logDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationTypeInput() {
    return this._logDestinationType
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string | undefined; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string | undefined) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // max_aggregation_interval - computed: false, optional: true, required: false
  private _maxAggregationInterval?: number | undefined; 
  public get maxAggregationInterval() {
    return this.getNumberAttribute('max_aggregation_interval');
  }
  public set maxAggregationInterval(value: number | undefined) {
    this._maxAggregationInterval = value;
  }
  public resetMaxAggregationInterval() {
    this._maxAggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAggregationIntervalInput() {
    return this._maxAggregationInterval
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string | undefined; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // destination_options - computed: false, optional: true, required: false
  private _destinationOptions?: FlowLogDestinationOptions | undefined; 
  private __destinationOptionsOutput = new FlowLogDestinationOptionsOutputReference(this as any, "destination_options", true);
  public get destinationOptions() {
    return this.__destinationOptionsOutput;
  }
  public putDestinationOptions(value: FlowLogDestinationOptions | undefined) {
    this._destinationOptions = value;
  }
  public resetDestinationOptions() {
    this._destinationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationOptionsInput() {
    return this._destinationOptions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eni_id: cdktf.stringToTerraform(this._eniId),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      log_destination: cdktf.stringToTerraform(this._logDestination),
      log_destination_type: cdktf.stringToTerraform(this._logDestinationType),
      log_format: cdktf.stringToTerraform(this._logFormat),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      max_aggregation_interval: cdktf.numberToTerraform(this._maxAggregationInterval),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      destination_options: flowLogDestinationOptionsToTerraform(this._destinationOptions),
    };
  }
}