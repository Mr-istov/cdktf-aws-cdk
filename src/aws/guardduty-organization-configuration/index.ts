/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * datasources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#datasources GuarddutyOrganizationConfiguration#datasources}
  */
  readonly datasources?: GuarddutyOrganizationConfigurationDatasources;
}
export interface GuarddutyOrganizationConfigurationDatasourcesS3Logs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktf.IResolvable;
}

export function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesS3Logs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_enable: cdktf.booleanToTerraform(struct!.autoEnable),
  }
}

export class GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnable = this._autoEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoEnable = value.autoEnable;
    }
  }

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktf.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktf.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }
}
export interface GuarddutyOrganizationConfigurationDatasources {
  /**
  * s3_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#s3_logs GuarddutyOrganizationConfiguration#s3_logs}
  */
  readonly s3Logs?: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
}

export function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesOutputReference | GuarddutyOrganizationConfigurationDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_logs: guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct!.s3Logs),
  }
}

export class GuarddutyOrganizationConfigurationDatasourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuarddutyOrganizationConfigurationDatasources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Logs = this._s3Logs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyOrganizationConfigurationDatasources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Logs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Logs.internalValue = value.s3Logs;
    }
  }

  // s3_logs - computed: false, optional: true, required: false
  private _s3Logs = new GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference(this, "s3_logs");
  public get s3Logs() {
    return this._s3Logs;
  }
  public putS3Logs(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs) {
    this._s3Logs.internalValue = value;
  }
  public resetS3Logs() {
    this._s3Logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LogsInput() {
    return this._s3Logs.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration aws_guardduty_organization_configuration}
*/
export class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_organization_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration aws_guardduty_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyOrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.76.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoEnable = config.autoEnable;
    this._detectorId = config.detectorId;
    this._id = config.id;
    this._datasources.internalValue = config.datasources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktf.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktf.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // datasources - computed: false, optional: true, required: false
  private _datasources = new GuarddutyOrganizationConfigurationDatasourcesOutputReference(this, "datasources");
  public get datasources() {
    return this._datasources;
  }
  public putDatasources(value: GuarddutyOrganizationConfigurationDatasources) {
    this._datasources.internalValue = value;
  }
  public resetDatasources() {
    this._datasources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourcesInput() {
    return this._datasources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktf.booleanToTerraform(this._autoEnable),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      id: cdktf.stringToTerraform(this._id),
      datasources: guarddutyOrganizationConfigurationDatasourcesToTerraform(this._datasources.internalValue),
    };
  }
}
