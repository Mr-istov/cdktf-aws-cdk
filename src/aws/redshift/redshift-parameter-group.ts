// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Redshift
*/
export interface RedshiftParameterGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#description RedshiftParameterGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#family RedshiftParameterGroup#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#name RedshiftParameterGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#tags RedshiftParameterGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#tags_all RedshiftParameterGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#parameter RedshiftParameterGroup#parameter}
  */
  readonly parameter?: RedshiftParameterGroupParameter[];
}
export interface RedshiftParameterGroupParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#name RedshiftParameterGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html#value RedshiftParameterGroup#value}
  */
  readonly value: string;
}

export function redshiftParameterGroupParameterToTerraform(struct?: RedshiftParameterGroupParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html aws_redshift_parameter_group}
*/
export class RedshiftParameterGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_redshift_parameter_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html aws_redshift_parameter_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftParameterGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftParameterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_parameter_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._family = config.family;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._parameter = config.parameter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // parameter - computed: false, optional: true, required: false
  private _parameter?: RedshiftParameterGroupParameter[] | undefined; 
  public get parameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: RedshiftParameterGroupParameter[] | undefined) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      family: cdktf.stringToTerraform(this._family),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      parameter: cdktf.listMapper(redshiftParameterGroupParameterToTerraform)(this._parameter),
    };
  }
}