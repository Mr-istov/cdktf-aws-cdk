// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic MapReduce
*/
export namespace EMR {
  export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_info EmrCluster#additional_info}
    */
    readonly additionalInfo?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#applications EmrCluster#applications}
    */
    readonly applications?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#autoscaling_role EmrCluster#autoscaling_role}
    */
    readonly autoscalingRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}
    */
    readonly configurations?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations_json EmrCluster#configurations_json}
    */
    readonly configurationsJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#custom_ami_id EmrCluster#custom_ami_id}
    */
    readonly customAmiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_root_volume_size EmrCluster#ebs_root_volume_size}
    */
    readonly ebsRootVolumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}
    */
    readonly keepJobFlowAliveWhenNoSteps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}
    */
    readonly logEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#log_uri EmrCluster#log_uri}
    */
    readonly logUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#release_label EmrCluster#release_label}
    */
    readonly releaseLabel: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#scale_down_behavior EmrCluster#scale_down_behavior}
    */
    readonly scaleDownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#security_configuration EmrCluster#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#service_role EmrCluster#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#step EmrCluster#step}
    */
    readonly step?: EmrClusterStep[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#step_concurrency_level EmrCluster#step_concurrency_level}
    */
    readonly stepConcurrencyLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#tags EmrCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#tags_all EmrCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#termination_protection EmrCluster#termination_protection}
    */
    readonly terminationProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#visible_to_all_users EmrCluster#visible_to_all_users}
    */
    readonly visibleToAllUsers?: boolean | cdktf.IResolvable;
    /**
    * bootstrap_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bootstrap_action EmrCluster#bootstrap_action}
    */
    readonly bootstrapAction?: EmrClusterBootstrapAction[];
    /**
    * core_instance_fleet block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#core_instance_fleet EmrCluster#core_instance_fleet}
    */
    readonly coreInstanceFleet?: EmrClusterCoreInstanceFleet[];
    /**
    * core_instance_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#core_instance_group EmrCluster#core_instance_group}
    */
    readonly coreInstanceGroup?: EmrClusterCoreInstanceGroup[];
    /**
    * ec2_attributes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ec2_attributes EmrCluster#ec2_attributes}
    */
    readonly ec2Attributes?: EmrClusterEc2Attributes[];
    /**
    * kerberos_attributes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#kerberos_attributes EmrCluster#kerberos_attributes}
    */
    readonly kerberosAttributes?: EmrClusterKerberosAttributes[];
    /**
    * master_instance_fleet block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#master_instance_fleet EmrCluster#master_instance_fleet}
    */
    readonly masterInstanceFleet?: EmrClusterMasterInstanceFleet[];
    /**
    * master_instance_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#master_instance_group EmrCluster#master_instance_group}
    */
    readonly masterInstanceGroup?: EmrClusterMasterInstanceGroup[];
  }
  export interface EmrClusterStepHadoopJarStep {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#args EmrCluster#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#jar EmrCluster#jar}
    */
    readonly jar?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#main_class EmrCluster#main_class}
    */
    readonly mainClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}
    */
    readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  }

  function emrClusterStepHadoopJarStepToTerraform(struct?: EmrClusterStepHadoopJarStep): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      args: struct!.args === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
      jar: struct!.jar === undefined ? null : cdktf.stringToTerraform(struct!.jar),
      main_class: struct!.mainClass === undefined ? null : cdktf.stringToTerraform(struct!.mainClass),
      properties: struct!.properties === undefined ? null : cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    }
  }

  export interface EmrClusterStep {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#action_on_failure EmrCluster#action_on_failure}
    */
    readonly actionOnFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#hadoop_jar_step EmrCluster#hadoop_jar_step}
    */
    readonly hadoopJarStep?: EmrClusterStepHadoopJarStep[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
  }

  function emrClusterStepToTerraform(struct?: EmrClusterStep): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action_on_failure: struct!.actionOnFailure === undefined ? null : cdktf.stringToTerraform(struct!.actionOnFailure),
      hadoop_jar_step: struct!.hadoopJarStep === undefined ? null : cdktf.listMapper(emrClusterStepHadoopJarStepToTerraform)(struct!.hadoopJarStep),
      name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
    }
  }

  export interface EmrClusterBootstrapAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#args EmrCluster#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#path EmrCluster#path}
    */
    readonly path: string;
  }

  function emrClusterBootstrapActionToTerraform(struct?: EmrClusterBootstrapAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
      name: cdktf.stringToTerraform(struct!.name),
      path: cdktf.stringToTerraform(struct!.path),
    }
  }

  export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#classification EmrCluster#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}
    */
    readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  }

  function emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      classification: cdktf.stringToTerraform(struct!.classification),
      properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    }
  }

  export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
  }

  function emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      iops: cdktf.numberToTerraform(struct!.iops),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
      volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
    }
  }

  export interface EmrClusterCoreInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#weighted_capacity EmrCluster#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}
    */
    readonly configurations?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[];
    /**
    * ebs_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[];
  }

  function emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bid_price: cdktf.stringToTerraform(struct!.bidPrice),
      bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
      configurations: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct!.configurations),
      ebs_config: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct!.ebsConfig),
    }
  }

  export interface EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
  }

  function emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    }
  }

  export interface EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#block_duration_minutes EmrCluster#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_action EmrCluster#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_duration_minutes EmrCluster#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
  }

  function emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
      block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
      timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
      timeout_duration_minutes: cdktf.numberToTerraform(struct!.timeoutDurationMinutes),
    }
  }

  export interface EmrClusterCoreInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#on_demand_specification EmrCluster#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    /**
    * spot_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#spot_specification EmrCluster#spot_specification}
    */
    readonly spotSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[];
  }

  function emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecifications): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      on_demand_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct!.onDemandSpecification),
      spot_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct!.spotSpecification),
    }
  }

  export interface EmrClusterCoreInstanceFleet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_on_demand_capacity EmrCluster#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_spot_capacity EmrCluster#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type_configs EmrCluster#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrClusterCoreInstanceFleetInstanceTypeConfigs[];
    /**
    * launch_specifications block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#launch_specifications EmrCluster#launch_specifications}
    */
    readonly launchSpecifications?: EmrClusterCoreInstanceFleetLaunchSpecifications[];
  }

  function emrClusterCoreInstanceFleetToTerraform(struct?: EmrClusterCoreInstanceFleet): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      target_on_demand_capacity: cdktf.numberToTerraform(struct!.targetOnDemandCapacity),
      target_spot_capacity: cdktf.numberToTerraform(struct!.targetSpotCapacity),
      instance_type_configs: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform)(struct!.instanceTypeConfigs),
      launch_specifications: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform)(struct!.launchSpecifications),
    }
  }

  export interface EmrClusterCoreInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
  }

  function emrClusterCoreInstanceGroupEbsConfigToTerraform(struct?: EmrClusterCoreInstanceGroupEbsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      iops: cdktf.numberToTerraform(struct!.iops),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
      volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
    }
  }

  export interface EmrClusterCoreInstanceGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#autoscaling_policy EmrCluster#autoscaling_policy}
    */
    readonly autoscalingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_count EmrCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterCoreInstanceGroupEbsConfig[];
  }

  function emrClusterCoreInstanceGroupToTerraform(struct?: EmrClusterCoreInstanceGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      autoscaling_policy: cdktf.stringToTerraform(struct!.autoscalingPolicy),
      bid_price: cdktf.stringToTerraform(struct!.bidPrice),
      instance_count: cdktf.numberToTerraform(struct!.instanceCount),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      name: cdktf.stringToTerraform(struct!.name),
      ebs_config: cdktf.listMapper(emrClusterCoreInstanceGroupEbsConfigToTerraform)(struct!.ebsConfig),
    }
  }

  export interface EmrClusterEc2Attributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_master_security_groups EmrCluster#additional_master_security_groups}
    */
    readonly additionalMasterSecurityGroups?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_slave_security_groups EmrCluster#additional_slave_security_groups}
    */
    readonly additionalSlaveSecurityGroups?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}
    */
    readonly emrManagedMasterSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}
    */
    readonly emrManagedSlaveSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_profile EmrCluster#instance_profile}
    */
    readonly instanceProfile: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#key_name EmrCluster#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#service_access_security_group EmrCluster#service_access_security_group}
    */
    readonly serviceAccessSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#subnet_id EmrCluster#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#subnet_ids EmrCluster#subnet_ids}
    */
    readonly subnetIds?: string[];
  }

  function emrClusterEc2AttributesToTerraform(struct?: EmrClusterEc2Attributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      additional_master_security_groups: cdktf.stringToTerraform(struct!.additionalMasterSecurityGroups),
      additional_slave_security_groups: cdktf.stringToTerraform(struct!.additionalSlaveSecurityGroups),
      emr_managed_master_security_group: cdktf.stringToTerraform(struct!.emrManagedMasterSecurityGroup),
      emr_managed_slave_security_group: cdktf.stringToTerraform(struct!.emrManagedSlaveSecurityGroup),
      instance_profile: cdktf.stringToTerraform(struct!.instanceProfile),
      key_name: cdktf.stringToTerraform(struct!.keyName),
      service_access_security_group: cdktf.stringToTerraform(struct!.serviceAccessSecurityGroup),
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export interface EmrClusterKerberosAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ad_domain_join_password EmrCluster#ad_domain_join_password}
    */
    readonly adDomainJoinPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ad_domain_join_user EmrCluster#ad_domain_join_user}
    */
    readonly adDomainJoinUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}
    */
    readonly crossRealmTrustPrincipalPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#kdc_admin_password EmrCluster#kdc_admin_password}
    */
    readonly kdcAdminPassword: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#realm EmrCluster#realm}
    */
    readonly realm: string;
  }

  function emrClusterKerberosAttributesToTerraform(struct?: EmrClusterKerberosAttributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      ad_domain_join_password: cdktf.stringToTerraform(struct!.adDomainJoinPassword),
      ad_domain_join_user: cdktf.stringToTerraform(struct!.adDomainJoinUser),
      cross_realm_trust_principal_password: cdktf.stringToTerraform(struct!.crossRealmTrustPrincipalPassword),
      kdc_admin_password: cdktf.stringToTerraform(struct!.kdcAdminPassword),
      realm: cdktf.stringToTerraform(struct!.realm),
    }
  }

  export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#classification EmrCluster#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}
    */
    readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  }

  function emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      classification: cdktf.stringToTerraform(struct!.classification),
      properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    }
  }

  export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
  }

  function emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      iops: cdktf.numberToTerraform(struct!.iops),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
      volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
    }
  }

  export interface EmrClusterMasterInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#weighted_capacity EmrCluster#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}
    */
    readonly configurations?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[];
    /**
    * ebs_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[];
  }

  function emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bid_price: cdktf.stringToTerraform(struct!.bidPrice),
      bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
      configurations: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct!.configurations),
      ebs_config: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct!.ebsConfig),
    }
  }

  export interface EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
  }

  function emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    }
  }

  export interface EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#block_duration_minutes EmrCluster#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_action EmrCluster#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_duration_minutes EmrCluster#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
  }

  function emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
      block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
      timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
      timeout_duration_minutes: cdktf.numberToTerraform(struct!.timeoutDurationMinutes),
    }
  }

  export interface EmrClusterMasterInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#on_demand_specification EmrCluster#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    /**
    * spot_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#spot_specification EmrCluster#spot_specification}
    */
    readonly spotSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[];
  }

  function emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecifications): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      on_demand_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct!.onDemandSpecification),
      spot_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct!.spotSpecification),
    }
  }

  export interface EmrClusterMasterInstanceFleet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_on_demand_capacity EmrCluster#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_spot_capacity EmrCluster#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type_configs EmrCluster#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrClusterMasterInstanceFleetInstanceTypeConfigs[];
    /**
    * launch_specifications block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#launch_specifications EmrCluster#launch_specifications}
    */
    readonly launchSpecifications?: EmrClusterMasterInstanceFleetLaunchSpecifications[];
  }

  function emrClusterMasterInstanceFleetToTerraform(struct?: EmrClusterMasterInstanceFleet): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      target_on_demand_capacity: cdktf.numberToTerraform(struct!.targetOnDemandCapacity),
      target_spot_capacity: cdktf.numberToTerraform(struct!.targetSpotCapacity),
      instance_type_configs: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform)(struct!.instanceTypeConfigs),
      launch_specifications: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform)(struct!.launchSpecifications),
    }
  }

  export interface EmrClusterMasterInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
  }

  function emrClusterMasterInstanceGroupEbsConfigToTerraform(struct?: EmrClusterMasterInstanceGroupEbsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      iops: cdktf.numberToTerraform(struct!.iops),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
      volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
    }
  }

  export interface EmrClusterMasterInstanceGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_count EmrCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterMasterInstanceGroupEbsConfig[];
  }

  function emrClusterMasterInstanceGroupToTerraform(struct?: EmrClusterMasterInstanceGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bid_price: cdktf.stringToTerraform(struct!.bidPrice),
      instance_count: cdktf.numberToTerraform(struct!.instanceCount),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      name: cdktf.stringToTerraform(struct!.name),
      ebs_config: cdktf.listMapper(emrClusterMasterInstanceGroupEbsConfigToTerraform)(struct!.ebsConfig),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster}
  */
  export class EmrCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_emr_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrClusterConfig
    */
    public constructor(scope: Construct, id: string, config: EmrClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_emr_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._additionalInfo = config.additionalInfo;
      this._applications = config.applications;
      this._autoscalingRole = config.autoscalingRole;
      this._configurations = config.configurations;
      this._configurationsJson = config.configurationsJson;
      this._customAmiId = config.customAmiId;
      this._ebsRootVolumeSize = config.ebsRootVolumeSize;
      this._keepJobFlowAliveWhenNoSteps = config.keepJobFlowAliveWhenNoSteps;
      this._logEncryptionKmsKeyId = config.logEncryptionKmsKeyId;
      this._logUri = config.logUri;
      this._name = config.name;
      this._releaseLabel = config.releaseLabel;
      this._scaleDownBehavior = config.scaleDownBehavior;
      this._securityConfiguration = config.securityConfiguration;
      this._serviceRole = config.serviceRole;
      this._step = config.step;
      this._stepConcurrencyLevel = config.stepConcurrencyLevel;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._terminationProtection = config.terminationProtection;
      this._visibleToAllUsers = config.visibleToAllUsers;
      this._bootstrapAction = config.bootstrapAction;
      this._coreInstanceFleet = config.coreInstanceFleet;
      this._coreInstanceGroup = config.coreInstanceGroup;
      this._ec2Attributes = config.ec2Attributes;
      this._kerberosAttributes = config.kerberosAttributes;
      this._masterInstanceFleet = config.masterInstanceFleet;
      this._masterInstanceGroup = config.masterInstanceGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_info - computed: false, optional: true, required: false
    private _additionalInfo?: string;
    public get additionalInfo() {
      return this.getStringAttribute('additional_info');
    }
    public set additionalInfo(value: string ) {
      this._additionalInfo = value;
    }
    public resetAdditionalInfo() {
      this._additionalInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalInfoInput() {
      return this._additionalInfo
    }

    // applications - computed: false, optional: true, required: false
    private _applications?: string[];
    public get applications() {
      return this.getListAttribute('applications');
    }
    public set applications(value: string[] ) {
      this._applications = value;
    }
    public resetApplications() {
      this._applications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationsInput() {
      return this._applications
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // autoscaling_role - computed: false, optional: true, required: false
    private _autoscalingRole?: string;
    public get autoscalingRole() {
      return this.getStringAttribute('autoscaling_role');
    }
    public set autoscalingRole(value: string ) {
      this._autoscalingRole = value;
    }
    public resetAutoscalingRole() {
      this._autoscalingRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoscalingRoleInput() {
      return this._autoscalingRole
    }

    // cluster_state - computed: true, optional: false, required: false
    public get clusterState() {
      return this.getStringAttribute('cluster_state');
    }

    // configurations - computed: false, optional: true, required: false
    private _configurations?: string;
    public get configurations() {
      return this.getStringAttribute('configurations');
    }
    public set configurations(value: string ) {
      this._configurations = value;
    }
    public resetConfigurations() {
      this._configurations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationsInput() {
      return this._configurations
    }

    // configurations_json - computed: false, optional: true, required: false
    private _configurationsJson?: string;
    public get configurationsJson() {
      return this.getStringAttribute('configurations_json');
    }
    public set configurationsJson(value: string ) {
      this._configurationsJson = value;
    }
    public resetConfigurationsJson() {
      this._configurationsJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationsJsonInput() {
      return this._configurationsJson
    }

    // custom_ami_id - computed: false, optional: true, required: false
    private _customAmiId?: string;
    public get customAmiId() {
      return this.getStringAttribute('custom_ami_id');
    }
    public set customAmiId(value: string ) {
      this._customAmiId = value;
    }
    public resetCustomAmiId() {
      this._customAmiId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAmiIdInput() {
      return this._customAmiId
    }

    // ebs_root_volume_size - computed: false, optional: true, required: false
    private _ebsRootVolumeSize?: number;
    public get ebsRootVolumeSize() {
      return this.getNumberAttribute('ebs_root_volume_size');
    }
    public set ebsRootVolumeSize(value: number ) {
      this._ebsRootVolumeSize = value;
    }
    public resetEbsRootVolumeSize() {
      this._ebsRootVolumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsRootVolumeSizeInput() {
      return this._ebsRootVolumeSize
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // keep_job_flow_alive_when_no_steps - computed: true, optional: true, required: false
    private _keepJobFlowAliveWhenNoSteps?: boolean | cdktf.IResolvable;
    public get keepJobFlowAliveWhenNoSteps() {
      return this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
    }
    public set keepJobFlowAliveWhenNoSteps(value: boolean | cdktf.IResolvable) {
      this._keepJobFlowAliveWhenNoSteps = value;
    }
    public resetKeepJobFlowAliveWhenNoSteps() {
      this._keepJobFlowAliveWhenNoSteps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keepJobFlowAliveWhenNoStepsInput() {
      return this._keepJobFlowAliveWhenNoSteps
    }

    // log_encryption_kms_key_id - computed: false, optional: true, required: false
    private _logEncryptionKmsKeyId?: string;
    public get logEncryptionKmsKeyId() {
      return this.getStringAttribute('log_encryption_kms_key_id');
    }
    public set logEncryptionKmsKeyId(value: string ) {
      this._logEncryptionKmsKeyId = value;
    }
    public resetLogEncryptionKmsKeyId() {
      this._logEncryptionKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logEncryptionKmsKeyIdInput() {
      return this._logEncryptionKmsKeyId
    }

    // log_uri - computed: false, optional: true, required: false
    private _logUri?: string;
    public get logUri() {
      return this.getStringAttribute('log_uri');
    }
    public set logUri(value: string ) {
      this._logUri = value;
    }
    public resetLogUri() {
      this._logUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logUriInput() {
      return this._logUri
    }

    // master_public_dns - computed: true, optional: false, required: false
    public get masterPublicDns() {
      return this.getStringAttribute('master_public_dns');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // release_label - computed: false, optional: false, required: true
    private _releaseLabel: string;
    public get releaseLabel() {
      return this.getStringAttribute('release_label');
    }
    public set releaseLabel(value: string) {
      this._releaseLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get releaseLabelInput() {
      return this._releaseLabel
    }

    // scale_down_behavior - computed: true, optional: true, required: false
    private _scaleDownBehavior?: string;
    public get scaleDownBehavior() {
      return this.getStringAttribute('scale_down_behavior');
    }
    public set scaleDownBehavior(value: string) {
      this._scaleDownBehavior = value;
    }
    public resetScaleDownBehavior() {
      this._scaleDownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleDownBehaviorInput() {
      return this._scaleDownBehavior
    }

    // security_configuration - computed: false, optional: true, required: false
    private _securityConfiguration?: string;
    public get securityConfiguration() {
      return this.getStringAttribute('security_configuration');
    }
    public set securityConfiguration(value: string ) {
      this._securityConfiguration = value;
    }
    public resetSecurityConfiguration() {
      this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigurationInput() {
      return this._securityConfiguration
    }

    // service_role - computed: false, optional: false, required: true
    private _serviceRole: string;
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
      this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
      return this._serviceRole
    }

    // step - computed: true, optional: true, required: false
    private _step?: EmrClusterStep[]
    public get step(): EmrClusterStep[] {
      return this.interpolationForAttribute('step') as any; // Getting the computed value is not yet implemented
    }
    public set step(value: EmrClusterStep[]) {
      this._step = value;
    }
    public resetStep() {
      this._step = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepInput() {
      return this._step
    }

    // step_concurrency_level - computed: false, optional: true, required: false
    private _stepConcurrencyLevel?: number;
    public get stepConcurrencyLevel() {
      return this.getNumberAttribute('step_concurrency_level');
    }
    public set stepConcurrencyLevel(value: number ) {
      this._stepConcurrencyLevel = value;
    }
    public resetStepConcurrencyLevel() {
      this._stepConcurrencyLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepConcurrencyLevelInput() {
      return this._stepConcurrencyLevel
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // termination_protection - computed: true, optional: true, required: false
    private _terminationProtection?: boolean | cdktf.IResolvable;
    public get terminationProtection() {
      return this.getBooleanAttribute('termination_protection');
    }
    public set terminationProtection(value: boolean | cdktf.IResolvable) {
      this._terminationProtection = value;
    }
    public resetTerminationProtection() {
      this._terminationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationProtectionInput() {
      return this._terminationProtection
    }

    // visible_to_all_users - computed: false, optional: true, required: false
    private _visibleToAllUsers?: boolean | cdktf.IResolvable;
    public get visibleToAllUsers() {
      return this.getBooleanAttribute('visible_to_all_users');
    }
    public set visibleToAllUsers(value: boolean | cdktf.IResolvable ) {
      this._visibleToAllUsers = value;
    }
    public resetVisibleToAllUsers() {
      this._visibleToAllUsers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get visibleToAllUsersInput() {
      return this._visibleToAllUsers
    }

    // bootstrap_action - computed: false, optional: true, required: false
    private _bootstrapAction?: EmrClusterBootstrapAction[];
    public get bootstrapAction() {
      return this.interpolationForAttribute('bootstrap_action') as any;
    }
    public set bootstrapAction(value: EmrClusterBootstrapAction[] ) {
      this._bootstrapAction = value;
    }
    public resetBootstrapAction() {
      this._bootstrapAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bootstrapActionInput() {
      return this._bootstrapAction
    }

    // core_instance_fleet - computed: false, optional: true, required: false
    private _coreInstanceFleet?: EmrClusterCoreInstanceFleet[];
    public get coreInstanceFleet() {
      return this.interpolationForAttribute('core_instance_fleet') as any;
    }
    public set coreInstanceFleet(value: EmrClusterCoreInstanceFleet[] ) {
      this._coreInstanceFleet = value;
    }
    public resetCoreInstanceFleet() {
      this._coreInstanceFleet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coreInstanceFleetInput() {
      return this._coreInstanceFleet
    }

    // core_instance_group - computed: false, optional: true, required: false
    private _coreInstanceGroup?: EmrClusterCoreInstanceGroup[];
    public get coreInstanceGroup() {
      return this.interpolationForAttribute('core_instance_group') as any;
    }
    public set coreInstanceGroup(value: EmrClusterCoreInstanceGroup[] ) {
      this._coreInstanceGroup = value;
    }
    public resetCoreInstanceGroup() {
      this._coreInstanceGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coreInstanceGroupInput() {
      return this._coreInstanceGroup
    }

    // ec2_attributes - computed: false, optional: true, required: false
    private _ec2Attributes?: EmrClusterEc2Attributes[];
    public get ec2Attributes() {
      return this.interpolationForAttribute('ec2_attributes') as any;
    }
    public set ec2Attributes(value: EmrClusterEc2Attributes[] ) {
      this._ec2Attributes = value;
    }
    public resetEc2Attributes() {
      this._ec2Attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2AttributesInput() {
      return this._ec2Attributes
    }

    // kerberos_attributes - computed: false, optional: true, required: false
    private _kerberosAttributes?: EmrClusterKerberosAttributes[];
    public get kerberosAttributes() {
      return this.interpolationForAttribute('kerberos_attributes') as any;
    }
    public set kerberosAttributes(value: EmrClusterKerberosAttributes[] ) {
      this._kerberosAttributes = value;
    }
    public resetKerberosAttributes() {
      this._kerberosAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kerberosAttributesInput() {
      return this._kerberosAttributes
    }

    // master_instance_fleet - computed: false, optional: true, required: false
    private _masterInstanceFleet?: EmrClusterMasterInstanceFleet[];
    public get masterInstanceFleet() {
      return this.interpolationForAttribute('master_instance_fleet') as any;
    }
    public set masterInstanceFleet(value: EmrClusterMasterInstanceFleet[] ) {
      this._masterInstanceFleet = value;
    }
    public resetMasterInstanceFleet() {
      this._masterInstanceFleet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterInstanceFleetInput() {
      return this._masterInstanceFleet
    }

    // master_instance_group - computed: false, optional: true, required: false
    private _masterInstanceGroup?: EmrClusterMasterInstanceGroup[];
    public get masterInstanceGroup() {
      return this.interpolationForAttribute('master_instance_group') as any;
    }
    public set masterInstanceGroup(value: EmrClusterMasterInstanceGroup[] ) {
      this._masterInstanceGroup = value;
    }
    public resetMasterInstanceGroup() {
      this._masterInstanceGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterInstanceGroupInput() {
      return this._masterInstanceGroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        additional_info: cdktf.stringToTerraform(this._additionalInfo),
        applications: cdktf.listMapper(cdktf.stringToTerraform)(this._applications),
        autoscaling_role: cdktf.stringToTerraform(this._autoscalingRole),
        configurations: cdktf.stringToTerraform(this._configurations),
        configurations_json: cdktf.stringToTerraform(this._configurationsJson),
        custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
        ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
        keep_job_flow_alive_when_no_steps: cdktf.booleanToTerraform(this._keepJobFlowAliveWhenNoSteps),
        log_encryption_kms_key_id: cdktf.stringToTerraform(this._logEncryptionKmsKeyId),
        log_uri: cdktf.stringToTerraform(this._logUri),
        name: cdktf.stringToTerraform(this._name),
        release_label: cdktf.stringToTerraform(this._releaseLabel),
        scale_down_behavior: cdktf.stringToTerraform(this._scaleDownBehavior),
        security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
        service_role: cdktf.stringToTerraform(this._serviceRole),
        step: cdktf.listMapper(emrClusterStepToTerraform)(this._step),
        step_concurrency_level: cdktf.numberToTerraform(this._stepConcurrencyLevel),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
        visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
        bootstrap_action: cdktf.listMapper(emrClusterBootstrapActionToTerraform)(this._bootstrapAction),
        core_instance_fleet: cdktf.listMapper(emrClusterCoreInstanceFleetToTerraform)(this._coreInstanceFleet),
        core_instance_group: cdktf.listMapper(emrClusterCoreInstanceGroupToTerraform)(this._coreInstanceGroup),
        ec2_attributes: cdktf.listMapper(emrClusterEc2AttributesToTerraform)(this._ec2Attributes),
        kerberos_attributes: cdktf.listMapper(emrClusterKerberosAttributesToTerraform)(this._kerberosAttributes),
        master_instance_fleet: cdktf.listMapper(emrClusterMasterInstanceFleetToTerraform)(this._masterInstanceFleet),
        master_instance_group: cdktf.listMapper(emrClusterMasterInstanceGroupToTerraform)(this._masterInstanceGroup),
      };
    }
  }
  export interface EmrInstanceFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#cluster_id EmrInstanceFleet#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#name EmrInstanceFleet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#target_spot_capacity EmrInstanceFleet#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#instance_type_configs EmrInstanceFleet#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrInstanceFleetInstanceTypeConfigs[];
    /**
    * launch_specifications block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#launch_specifications EmrInstanceFleet#launch_specifications}
    */
    readonly launchSpecifications?: EmrInstanceFleetLaunchSpecifications[];
  }
  export interface EmrInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#classification EmrInstanceFleet#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#properties EmrInstanceFleet#properties}
    */
    readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  }

  function emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsConfigurations): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      classification: cdktf.stringToTerraform(struct!.classification),
      properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    }
  }

  export interface EmrInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#iops EmrInstanceFleet#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#size EmrInstanceFleet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#type EmrInstanceFleet#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#volumes_per_instance EmrInstanceFleet#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
  }

  function emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsEbsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      iops: cdktf.numberToTerraform(struct!.iops),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
      volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
    }
  }

  export interface EmrInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#bid_price EmrInstanceFleet#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#bid_price_as_percentage_of_on_demand_price EmrInstanceFleet#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#instance_type EmrInstanceFleet#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#weighted_capacity EmrInstanceFleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#configurations EmrInstanceFleet#configurations}
    */
    readonly configurations?: EmrInstanceFleetInstanceTypeConfigsConfigurations[];
    /**
    * ebs_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#ebs_config EmrInstanceFleet#ebs_config}
    */
    readonly ebsConfig?: EmrInstanceFleetInstanceTypeConfigsEbsConfig[];
  }

  function emrInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bid_price: cdktf.stringToTerraform(struct!.bidPrice),
      bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
      configurations: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct!.configurations),
      ebs_config: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct!.ebsConfig),
    }
  }

  export interface EmrInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#allocation_strategy EmrInstanceFleet#allocation_strategy}
    */
    readonly allocationStrategy: string;
  }

  function emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    }
  }

  export interface EmrInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#allocation_strategy EmrInstanceFleet#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#block_duration_minutes EmrInstanceFleet#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#timeout_action EmrInstanceFleet#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#timeout_duration_minutes EmrInstanceFleet#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
  }

  function emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsSpotSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
      block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
      timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
      timeout_duration_minutes: cdktf.numberToTerraform(struct!.timeoutDurationMinutes),
    }
  }

  export interface EmrInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#on_demand_specification EmrInstanceFleet#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    /**
    * spot_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#spot_specification EmrInstanceFleet#spot_specification}
    */
    readonly spotSpecification?: EmrInstanceFleetLaunchSpecificationsSpotSpecification[];
  }

  function emrInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrInstanceFleetLaunchSpecifications): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      on_demand_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct!.onDemandSpecification),
      spot_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct!.spotSpecification),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet}
  */
  export class EmrInstanceFleet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_emr_instance_fleet";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceFleetConfig
    */
    public constructor(scope: Construct, id: string, config: EmrInstanceFleetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_emr_instance_fleet',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterId = config.clusterId;
      this._name = config.name;
      this._targetOnDemandCapacity = config.targetOnDemandCapacity;
      this._targetSpotCapacity = config.targetSpotCapacity;
      this._instanceTypeConfigs = config.instanceTypeConfigs;
      this._launchSpecifications = config.launchSpecifications;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId: string;
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
      this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
      return this._clusterId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string ) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // provisioned_on_demand_capacity - computed: true, optional: false, required: false
    public get provisionedOnDemandCapacity() {
      return this.getNumberAttribute('provisioned_on_demand_capacity');
    }

    // provisioned_spot_capacity - computed: true, optional: false, required: false
    public get provisionedSpotCapacity() {
      return this.getNumberAttribute('provisioned_spot_capacity');
    }

    // target_on_demand_capacity - computed: false, optional: true, required: false
    private _targetOnDemandCapacity?: number;
    public get targetOnDemandCapacity() {
      return this.getNumberAttribute('target_on_demand_capacity');
    }
    public set targetOnDemandCapacity(value: number ) {
      this._targetOnDemandCapacity = value;
    }
    public resetTargetOnDemandCapacity() {
      this._targetOnDemandCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetOnDemandCapacityInput() {
      return this._targetOnDemandCapacity
    }

    // target_spot_capacity - computed: false, optional: true, required: false
    private _targetSpotCapacity?: number;
    public get targetSpotCapacity() {
      return this.getNumberAttribute('target_spot_capacity');
    }
    public set targetSpotCapacity(value: number ) {
      this._targetSpotCapacity = value;
    }
    public resetTargetSpotCapacity() {
      this._targetSpotCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetSpotCapacityInput() {
      return this._targetSpotCapacity
    }

    // instance_type_configs - computed: false, optional: true, required: false
    private _instanceTypeConfigs?: EmrInstanceFleetInstanceTypeConfigs[];
    public get instanceTypeConfigs() {
      return this.interpolationForAttribute('instance_type_configs') as any;
    }
    public set instanceTypeConfigs(value: EmrInstanceFleetInstanceTypeConfigs[] ) {
      this._instanceTypeConfigs = value;
    }
    public resetInstanceTypeConfigs() {
      this._instanceTypeConfigs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeConfigsInput() {
      return this._instanceTypeConfigs
    }

    // launch_specifications - computed: false, optional: true, required: false
    private _launchSpecifications?: EmrInstanceFleetLaunchSpecifications[];
    public get launchSpecifications() {
      return this.interpolationForAttribute('launch_specifications') as any;
    }
    public set launchSpecifications(value: EmrInstanceFleetLaunchSpecifications[] ) {
      this._launchSpecifications = value;
    }
    public resetLaunchSpecifications() {
      this._launchSpecifications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchSpecificationsInput() {
      return this._launchSpecifications
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_id: cdktf.stringToTerraform(this._clusterId),
        name: cdktf.stringToTerraform(this._name),
        target_on_demand_capacity: cdktf.numberToTerraform(this._targetOnDemandCapacity),
        target_spot_capacity: cdktf.numberToTerraform(this._targetSpotCapacity),
        instance_type_configs: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsToTerraform)(this._instanceTypeConfigs),
        launch_specifications: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsToTerraform)(this._launchSpecifications),
      };
    }
  }
  export interface EmrInstanceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#autoscaling_policy EmrInstanceGroup#autoscaling_policy}
    */
    readonly autoscalingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#bid_price EmrInstanceGroup#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#cluster_id EmrInstanceGroup#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#configurations_json EmrInstanceGroup#configurations_json}
    */
    readonly configurationsJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#ebs_optimized EmrInstanceGroup#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#instance_count EmrInstanceGroup#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#instance_type EmrInstanceGroup#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#name EmrInstanceGroup#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#ebs_config EmrInstanceGroup#ebs_config}
    */
    readonly ebsConfig?: EmrInstanceGroupEbsConfig[];
  }
  export interface EmrInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#iops EmrInstanceGroup#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#size EmrInstanceGroup#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#type EmrInstanceGroup#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#volumes_per_instance EmrInstanceGroup#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
  }

  function emrInstanceGroupEbsConfigToTerraform(struct?: EmrInstanceGroupEbsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      iops: cdktf.numberToTerraform(struct!.iops),
      size: cdktf.numberToTerraform(struct!.size),
      type: cdktf.stringToTerraform(struct!.type),
      volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html aws_emr_instance_group}
  */
  export class EmrInstanceGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_emr_instance_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html aws_emr_instance_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceGroupConfig
    */
    public constructor(scope: Construct, id: string, config: EmrInstanceGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_emr_instance_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoscalingPolicy = config.autoscalingPolicy;
      this._bidPrice = config.bidPrice;
      this._clusterId = config.clusterId;
      this._configurationsJson = config.configurationsJson;
      this._ebsOptimized = config.ebsOptimized;
      this._instanceCount = config.instanceCount;
      this._instanceType = config.instanceType;
      this._name = config.name;
      this._ebsConfig = config.ebsConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // autoscaling_policy - computed: false, optional: true, required: false
    private _autoscalingPolicy?: string;
    public get autoscalingPolicy() {
      return this.getStringAttribute('autoscaling_policy');
    }
    public set autoscalingPolicy(value: string ) {
      this._autoscalingPolicy = value;
    }
    public resetAutoscalingPolicy() {
      this._autoscalingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoscalingPolicyInput() {
      return this._autoscalingPolicy
    }

    // bid_price - computed: false, optional: true, required: false
    private _bidPrice?: string;
    public get bidPrice() {
      return this.getStringAttribute('bid_price');
    }
    public set bidPrice(value: string ) {
      this._bidPrice = value;
    }
    public resetBidPrice() {
      this._bidPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bidPriceInput() {
      return this._bidPrice
    }

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId: string;
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
      this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
      return this._clusterId
    }

    // configurations_json - computed: false, optional: true, required: false
    private _configurationsJson?: string;
    public get configurationsJson() {
      return this.getStringAttribute('configurations_json');
    }
    public set configurationsJson(value: string ) {
      this._configurationsJson = value;
    }
    public resetConfigurationsJson() {
      this._configurationsJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationsJsonInput() {
      return this._configurationsJson
    }

    // ebs_optimized - computed: false, optional: true, required: false
    private _ebsOptimized?: boolean | cdktf.IResolvable;
    public get ebsOptimized() {
      return this.getBooleanAttribute('ebs_optimized');
    }
    public set ebsOptimized(value: boolean | cdktf.IResolvable ) {
      this._ebsOptimized = value;
    }
    public resetEbsOptimized() {
      this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptimizedInput() {
      return this._ebsOptimized
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_count - computed: false, optional: true, required: false
    private _instanceCount?: number;
    public get instanceCount() {
      return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number ) {
      this._instanceCount = value;
    }
    public resetInstanceCount() {
      this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
      return this._instanceCount
    }

    // instance_type - computed: false, optional: false, required: true
    private _instanceType: string;
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
      this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // name - computed: false, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string ) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // running_instance_count - computed: true, optional: false, required: false
    public get runningInstanceCount() {
      return this.getNumberAttribute('running_instance_count');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // ebs_config - computed: false, optional: true, required: false
    private _ebsConfig?: EmrInstanceGroupEbsConfig[];
    public get ebsConfig() {
      return this.interpolationForAttribute('ebs_config') as any;
    }
    public set ebsConfig(value: EmrInstanceGroupEbsConfig[] ) {
      this._ebsConfig = value;
    }
    public resetEbsConfig() {
      this._ebsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsConfigInput() {
      return this._ebsConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        autoscaling_policy: cdktf.stringToTerraform(this._autoscalingPolicy),
        bid_price: cdktf.stringToTerraform(this._bidPrice),
        cluster_id: cdktf.stringToTerraform(this._clusterId),
        configurations_json: cdktf.stringToTerraform(this._configurationsJson),
        ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
        instance_count: cdktf.numberToTerraform(this._instanceCount),
        instance_type: cdktf.stringToTerraform(this._instanceType),
        name: cdktf.stringToTerraform(this._name),
        ebs_config: cdktf.listMapper(emrInstanceGroupEbsConfigToTerraform)(this._ebsConfig),
      };
    }
  }
  export interface EmrManagedScalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#cluster_id EmrManagedScalingPolicy#cluster_id}
    */
    readonly clusterId: string;
    /**
    * compute_limits block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#compute_limits EmrManagedScalingPolicy#compute_limits}
    */
    readonly computeLimits: EmrManagedScalingPolicyComputeLimits[];
  }
  export interface EmrManagedScalingPolicyComputeLimits {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}
    */
    readonly maximumCapacityUnits: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}
    */
    readonly maximumCoreCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}
    */
    readonly maximumOndemandCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}
    */
    readonly minimumCapacityUnits: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#unit_type EmrManagedScalingPolicy#unit_type}
    */
    readonly unitType: string;
  }

  function emrManagedScalingPolicyComputeLimitsToTerraform(struct?: EmrManagedScalingPolicyComputeLimits): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      maximum_capacity_units: cdktf.numberToTerraform(struct!.maximumCapacityUnits),
      maximum_core_capacity_units: cdktf.numberToTerraform(struct!.maximumCoreCapacityUnits),
      maximum_ondemand_capacity_units: cdktf.numberToTerraform(struct!.maximumOndemandCapacityUnits),
      minimum_capacity_units: cdktf.numberToTerraform(struct!.minimumCapacityUnits),
      unit_type: cdktf.stringToTerraform(struct!.unitType),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy}
  */
  export class EmrManagedScalingPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_emr_managed_scaling_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrManagedScalingPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: EmrManagedScalingPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_emr_managed_scaling_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterId = config.clusterId;
      this._computeLimits = config.computeLimits;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId: string;
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
      this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
      return this._clusterId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // compute_limits - computed: false, optional: false, required: true
    private _computeLimits: EmrManagedScalingPolicyComputeLimits[];
    public get computeLimits() {
      return this.interpolationForAttribute('compute_limits') as any;
    }
    public set computeLimits(value: EmrManagedScalingPolicyComputeLimits[]) {
      this._computeLimits = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeLimitsInput() {
      return this._computeLimits
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_id: cdktf.stringToTerraform(this._clusterId),
        compute_limits: cdktf.listMapper(emrManagedScalingPolicyComputeLimitsToTerraform)(this._computeLimits),
      };
    }
  }
  export interface EmrSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html#configuration EmrSecurityConfiguration#configuration}
    */
    readonly configuration: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html#name EmrSecurityConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html#name_prefix EmrSecurityConfiguration#name_prefix}
    */
    readonly namePrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html aws_emr_security_configuration}
  */
  export class EmrSecurityConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_emr_security_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html aws_emr_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrSecurityConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: EmrSecurityConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_emr_security_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._configuration = config.configuration;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration - computed: false, optional: false, required: true
    private _configuration: string;
    public get configuration() {
      return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
      this._configuration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
      return this._configuration
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string ) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        configuration: cdktf.stringToTerraform(this._configuration),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
      };
    }
  }
}