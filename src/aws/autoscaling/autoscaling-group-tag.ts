// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Auto Scaling
*/
export interface AutoscalingGroupTagAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}
  */
  readonly autoscalingGroupName: string;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#tag AutoscalingGroupTagA#tag}
  */
  readonly tag: AutoscalingGroupTagTag;
}
export interface AutoscalingGroupTagTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#key AutoscalingGroupTagA#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}
  */
  readonly propagateAtLaunch: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#value AutoscalingGroupTagA#value}
  */
  readonly value: string;
}

export function autoscalingGroupTagTagToTerraform(struct?: AutoscalingGroupTagTagOutputReference | AutoscalingGroupTagTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    propagate_at_launch: cdktf.booleanToTerraform(struct!.propagateAtLaunch),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AutoscalingGroupTagTagOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // propagate_at_launch - computed: false, optional: false, required: true
  private _propagateAtLaunch?: boolean | cdktf.IResolvable; 
  public get propagateAtLaunch() {
    return this.getBooleanAttribute('propagate_at_launch') as any;
  }
  public set propagateAtLaunch(value: boolean | cdktf.IResolvable) {
    this._propagateAtLaunch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateAtLaunchInput() {
    return this._propagateAtLaunch
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag}
*/
export class AutoscalingGroupTagA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_autoscaling_group_tag";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingGroupTagAConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingGroupTagAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_group_tag',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: AutoscalingGroupTagTag; 
  private __tagOutput = new AutoscalingGroupTagTagOutputReference(this as any, "tag", true);
  public get tag() {
    return this.__tagOutput;
  }
  public putTag(value: AutoscalingGroupTagTag) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      tag: autoscalingGroupTagTagToTerraform(this._tag),
    };
  }
}