import { CdktfAwsCdkProject } from "./projen";

const project = new CdktfAwsCdkProject({
  terraformProvider: "aws@~> 3.0",
  cdktfVersion: '0.6.4-pre.372',
  constructsVersion: "^10.0.0",
  minNodeVersion: "12.19.0",
  projenrcTs: true
});

project.synth();