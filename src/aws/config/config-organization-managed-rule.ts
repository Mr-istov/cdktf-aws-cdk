// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Config
*/
export interface ConfigOrganizationManagedRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#description ConfigOrganizationManagedRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}
  */
  readonly excludedAccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#input_parameters ConfigOrganizationManagedRule#input_parameters}
  */
  readonly inputParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}
  */
  readonly maximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#name ConfigOrganizationManagedRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}
  */
  readonly resourceIdScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}
  */
  readonly resourceTypesScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#rule_identifier ConfigOrganizationManagedRule#rule_identifier}
  */
  readonly ruleIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}
  */
  readonly tagKeyScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}
  */
  readonly tagValueScope?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#timeouts ConfigOrganizationManagedRule#timeouts}
  */
  readonly timeouts?: ConfigOrganizationManagedRuleTimeouts;
}
export interface ConfigOrganizationManagedRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#create ConfigOrganizationManagedRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#delete ConfigOrganizationManagedRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#update ConfigOrganizationManagedRule#update}
  */
  readonly update?: string;
}

export function configOrganizationManagedRuleTimeoutsToTerraform(struct?: ConfigOrganizationManagedRuleTimeoutsOutputReference | ConfigOrganizationManagedRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ConfigOrganizationManagedRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html aws_config_organization_managed_rule}
*/
export class ConfigOrganizationManagedRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_config_organization_managed_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html aws_config_organization_managed_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigOrganizationManagedRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigOrganizationManagedRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_organization_managed_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._excludedAccounts = config.excludedAccounts;
    this._inputParameters = config.inputParameters;
    this._maximumExecutionFrequency = config.maximumExecutionFrequency;
    this._name = config.name;
    this._resourceIdScope = config.resourceIdScope;
    this._resourceTypesScope = config.resourceTypesScope;
    this._ruleIdentifier = config.ruleIdentifier;
    this._tagKeyScope = config.tagKeyScope;
    this._tagValueScope = config.tagValueScope;
    this._timeouts = config.timeouts;
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

  // excluded_accounts - computed: false, optional: true, required: false
  private _excludedAccounts?: string[] | undefined; 
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }
  public set excludedAccounts(value: string[] | undefined) {
    this._excludedAccounts = value;
  }
  public resetExcludedAccounts() {
    this._excludedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAccountsInput() {
    return this._excludedAccounts
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_parameters - computed: false, optional: true, required: false
  private _inputParameters?: string | undefined; 
  public get inputParameters() {
    return this.getStringAttribute('input_parameters');
  }
  public set inputParameters(value: string | undefined) {
    this._inputParameters = value;
  }
  public resetInputParameters() {
    this._inputParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParametersInput() {
    return this._inputParameters
  }

  // maximum_execution_frequency - computed: false, optional: true, required: false
  private _maximumExecutionFrequency?: string | undefined; 
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }
  public set maximumExecutionFrequency(value: string | undefined) {
    this._maximumExecutionFrequency = value;
  }
  public resetMaximumExecutionFrequency() {
    this._maximumExecutionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionFrequencyInput() {
    return this._maximumExecutionFrequency
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

  // resource_id_scope - computed: false, optional: true, required: false
  private _resourceIdScope?: string | undefined; 
  public get resourceIdScope() {
    return this.getStringAttribute('resource_id_scope');
  }
  public set resourceIdScope(value: string | undefined) {
    this._resourceIdScope = value;
  }
  public resetResourceIdScope() {
    this._resourceIdScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdScopeInput() {
    return this._resourceIdScope
  }

  // resource_types_scope - computed: false, optional: true, required: false
  private _resourceTypesScope?: string[] | undefined; 
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }
  public set resourceTypesScope(value: string[] | undefined) {
    this._resourceTypesScope = value;
  }
  public resetResourceTypesScope() {
    this._resourceTypesScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesScopeInput() {
    return this._resourceTypesScope
  }

  // rule_identifier - computed: false, optional: false, required: true
  private _ruleIdentifier?: string; 
  public get ruleIdentifier() {
    return this.getStringAttribute('rule_identifier');
  }
  public set ruleIdentifier(value: string) {
    this._ruleIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdentifierInput() {
    return this._ruleIdentifier
  }

  // tag_key_scope - computed: false, optional: true, required: false
  private _tagKeyScope?: string | undefined; 
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }
  public set tagKeyScope(value: string | undefined) {
    this._tagKeyScope = value;
  }
  public resetTagKeyScope() {
    this._tagKeyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyScopeInput() {
    return this._tagKeyScope
  }

  // tag_value_scope - computed: false, optional: true, required: false
  private _tagValueScope?: string | undefined; 
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
  public set tagValueScope(value: string | undefined) {
    this._tagValueScope = value;
  }
  public resetTagValueScope() {
    this._tagValueScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueScopeInput() {
    return this._tagValueScope
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConfigOrganizationManagedRuleTimeouts | undefined; 
  private __timeoutsOutput = new ConfigOrganizationManagedRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ConfigOrganizationManagedRuleTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
      input_parameters: cdktf.stringToTerraform(this._inputParameters),
      maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
      name: cdktf.stringToTerraform(this._name),
      resource_id_scope: cdktf.stringToTerraform(this._resourceIdScope),
      resource_types_scope: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypesScope),
      rule_identifier: cdktf.stringToTerraform(this._ruleIdentifier),
      tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
      tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
      timeouts: configOrganizationManagedRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}