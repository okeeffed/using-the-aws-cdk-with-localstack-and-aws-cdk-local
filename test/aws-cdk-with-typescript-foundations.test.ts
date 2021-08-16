import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as AwsCdkWithTypescriptFoundations from "../lib/aws-cdk-with-typescript-foundations-stack";

test("Fargate Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack =
    new AwsCdkWithTypescriptFoundations.AwsCdkWithTypescriptFoundationsStack(
      app,
      "MyTestStack"
    );
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {
          MyVpcF9F0CA6F: {
            Type: "AWS::EC2::VPC",
            Properties: {
              CidrBlock: "10.0.0.0/16",
              EnableDnsHostnames: true,
              EnableDnsSupport: true,
              InstanceTenancy: "default",
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc",
                },
              ],
            },
          },
          MyVpcPublicSubnet1SubnetF6608456: {
            Type: "AWS::EC2::Subnet",
            Properties: {
              CidrBlock: "10.0.0.0/18",
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              AvailabilityZone: {
                "Fn::Select": [
                  0,
                  {
                    "Fn::GetAZs": "",
                  },
                ],
              },
              MapPublicIpOnLaunch: true,
              Tags: [
                {
                  Key: "aws-cdk:subnet-name",
                  Value: "Public",
                },
                {
                  Key: "aws-cdk:subnet-type",
                  Value: "Public",
                },
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PublicSubnet1",
                },
              ],
            },
          },
          MyVpcPublicSubnet1RouteTableC46AB2F4: {
            Type: "AWS::EC2::RouteTable",
            Properties: {
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PublicSubnet1",
                },
              ],
            },
          },
          MyVpcPublicSubnet1RouteTableAssociation2ECEE1CB: {
            Type: "AWS::EC2::SubnetRouteTableAssociation",
            Properties: {
              RouteTableId: {
                Ref: "MyVpcPublicSubnet1RouteTableC46AB2F4",
              },
              SubnetId: {
                Ref: "MyVpcPublicSubnet1SubnetF6608456",
              },
            },
          },
          MyVpcPublicSubnet1DefaultRoute95FDF9EB: {
            Type: "AWS::EC2::Route",
            Properties: {
              RouteTableId: {
                Ref: "MyVpcPublicSubnet1RouteTableC46AB2F4",
              },
              DestinationCidrBlock: "0.0.0.0/0",
              GatewayId: {
                Ref: "MyVpcIGW5C4A4F63",
              },
            },
            DependsOn: ["MyVpcVPCGW488ACE0D"],
          },
          MyVpcPublicSubnet1EIP096967CB: {
            Type: "AWS::EC2::EIP",
            Properties: {
              Domain: "vpc",
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PublicSubnet1",
                },
              ],
            },
          },
          MyVpcPublicSubnet1NATGatewayAD3400C1: {
            Type: "AWS::EC2::NatGateway",
            Properties: {
              SubnetId: {
                Ref: "MyVpcPublicSubnet1SubnetF6608456",
              },
              AllocationId: {
                "Fn::GetAtt": ["MyVpcPublicSubnet1EIP096967CB", "AllocationId"],
              },
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PublicSubnet1",
                },
              ],
            },
          },
          MyVpcPublicSubnet2Subnet492B6BFB: {
            Type: "AWS::EC2::Subnet",
            Properties: {
              CidrBlock: "10.0.64.0/18",
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              AvailabilityZone: {
                "Fn::Select": [
                  1,
                  {
                    "Fn::GetAZs": "",
                  },
                ],
              },
              MapPublicIpOnLaunch: true,
              Tags: [
                {
                  Key: "aws-cdk:subnet-name",
                  Value: "Public",
                },
                {
                  Key: "aws-cdk:subnet-type",
                  Value: "Public",
                },
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PublicSubnet2",
                },
              ],
            },
          },
          MyVpcPublicSubnet2RouteTable1DF17386: {
            Type: "AWS::EC2::RouteTable",
            Properties: {
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PublicSubnet2",
                },
              ],
            },
          },
          MyVpcPublicSubnet2RouteTableAssociation227DE78D: {
            Type: "AWS::EC2::SubnetRouteTableAssociation",
            Properties: {
              RouteTableId: {
                Ref: "MyVpcPublicSubnet2RouteTable1DF17386",
              },
              SubnetId: {
                Ref: "MyVpcPublicSubnet2Subnet492B6BFB",
              },
            },
          },
          MyVpcPublicSubnet2DefaultRoute052936F6: {
            Type: "AWS::EC2::Route",
            Properties: {
              RouteTableId: {
                Ref: "MyVpcPublicSubnet2RouteTable1DF17386",
              },
              DestinationCidrBlock: "0.0.0.0/0",
              GatewayId: {
                Ref: "MyVpcIGW5C4A4F63",
              },
            },
            DependsOn: ["MyVpcVPCGW488ACE0D"],
          },
          MyVpcPublicSubnet2EIP8CCBA239: {
            Type: "AWS::EC2::EIP",
            Properties: {
              Domain: "vpc",
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PublicSubnet2",
                },
              ],
            },
          },
          MyVpcPublicSubnet2NATGateway91BFBEC9: {
            Type: "AWS::EC2::NatGateway",
            Properties: {
              SubnetId: {
                Ref: "MyVpcPublicSubnet2Subnet492B6BFB",
              },
              AllocationId: {
                "Fn::GetAtt": ["MyVpcPublicSubnet2EIP8CCBA239", "AllocationId"],
              },
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PublicSubnet2",
                },
              ],
            },
          },
          MyVpcPrivateSubnet1Subnet5057CF7E: {
            Type: "AWS::EC2::Subnet",
            Properties: {
              CidrBlock: "10.0.128.0/18",
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              AvailabilityZone: {
                "Fn::Select": [
                  0,
                  {
                    "Fn::GetAZs": "",
                  },
                ],
              },
              MapPublicIpOnLaunch: false,
              Tags: [
                {
                  Key: "aws-cdk:subnet-name",
                  Value: "Private",
                },
                {
                  Key: "aws-cdk:subnet-type",
                  Value: "Private",
                },
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PrivateSubnet1",
                },
              ],
            },
          },
          MyVpcPrivateSubnet1RouteTable8819E6E2: {
            Type: "AWS::EC2::RouteTable",
            Properties: {
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PrivateSubnet1",
                },
              ],
            },
          },
          MyVpcPrivateSubnet1RouteTableAssociation56D38C7E: {
            Type: "AWS::EC2::SubnetRouteTableAssociation",
            Properties: {
              RouteTableId: {
                Ref: "MyVpcPrivateSubnet1RouteTable8819E6E2",
              },
              SubnetId: {
                Ref: "MyVpcPrivateSubnet1Subnet5057CF7E",
              },
            },
          },
          MyVpcPrivateSubnet1DefaultRouteA8CDE2FA: {
            Type: "AWS::EC2::Route",
            Properties: {
              RouteTableId: {
                Ref: "MyVpcPrivateSubnet1RouteTable8819E6E2",
              },
              DestinationCidrBlock: "0.0.0.0/0",
              NatGatewayId: {
                Ref: "MyVpcPublicSubnet1NATGatewayAD3400C1",
              },
            },
          },
          MyVpcPrivateSubnet2Subnet0040C983: {
            Type: "AWS::EC2::Subnet",
            Properties: {
              CidrBlock: "10.0.192.0/18",
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              AvailabilityZone: {
                "Fn::Select": [
                  1,
                  {
                    "Fn::GetAZs": "",
                  },
                ],
              },
              MapPublicIpOnLaunch: false,
              Tags: [
                {
                  Key: "aws-cdk:subnet-name",
                  Value: "Private",
                },
                {
                  Key: "aws-cdk:subnet-type",
                  Value: "Private",
                },
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PrivateSubnet2",
                },
              ],
            },
          },
          MyVpcPrivateSubnet2RouteTableCEDCEECE: {
            Type: "AWS::EC2::RouteTable",
            Properties: {
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc/PrivateSubnet2",
                },
              ],
            },
          },
          MyVpcPrivateSubnet2RouteTableAssociation86A610DA: {
            Type: "AWS::EC2::SubnetRouteTableAssociation",
            Properties: {
              RouteTableId: {
                Ref: "MyVpcPrivateSubnet2RouteTableCEDCEECE",
              },
              SubnetId: {
                Ref: "MyVpcPrivateSubnet2Subnet0040C983",
              },
            },
          },
          MyVpcPrivateSubnet2DefaultRoute9CE96294: {
            Type: "AWS::EC2::Route",
            Properties: {
              RouteTableId: {
                Ref: "MyVpcPrivateSubnet2RouteTableCEDCEECE",
              },
              DestinationCidrBlock: "0.0.0.0/0",
              NatGatewayId: {
                Ref: "MyVpcPublicSubnet2NATGateway91BFBEC9",
              },
            },
          },
          MyVpcIGW5C4A4F63: {
            Type: "AWS::EC2::InternetGateway",
            Properties: {
              Tags: [
                {
                  Key: "Name",
                  Value: "MyTestStack/MyVpc",
                },
              ],
            },
          },
          MyVpcVPCGW488ACE0D: {
            Type: "AWS::EC2::VPCGatewayAttachment",
            Properties: {
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
              InternetGatewayId: {
                Ref: "MyVpcIGW5C4A4F63",
              },
            },
          },
          MyCluster4C1BA579: {
            Type: "AWS::ECS::Cluster",
          },
          MyFargateServiceLBDE830E97: {
            Type: "AWS::ElasticLoadBalancingV2::LoadBalancer",
            Properties: {
              LoadBalancerAttributes: [
                {
                  Key: "deletion_protection.enabled",
                  Value: "false",
                },
              ],
              Scheme: "internet-facing",
              SecurityGroups: [
                {
                  "Fn::GetAtt": [
                    "MyFargateServiceLBSecurityGroup6FBF16F1",
                    "GroupId",
                  ],
                },
              ],
              Subnets: [
                {
                  Ref: "MyVpcPublicSubnet1SubnetF6608456",
                },
                {
                  Ref: "MyVpcPublicSubnet2Subnet492B6BFB",
                },
              ],
              Type: "application",
            },
            DependsOn: [
              "MyVpcPublicSubnet1DefaultRoute95FDF9EB",
              "MyVpcPublicSubnet2DefaultRoute052936F6",
            ],
          },
          MyFargateServiceLBSecurityGroup6FBF16F1: {
            Type: "AWS::EC2::SecurityGroup",
            Properties: {
              GroupDescription:
                "Automatically created Security Group for ELB MyTestStackMyFargateServiceLB1C43A0E9",
              SecurityGroupIngress: [
                {
                  CidrIp: "0.0.0.0/0",
                  Description: "Allow from anyone on port 80",
                  FromPort: 80,
                  IpProtocol: "tcp",
                  ToPort: 80,
                },
              ],
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
            },
          },
          MyFargateServiceLBSecurityGrouptoMyTestStackMyFargateServiceSecurityGroup757F82AB805F4EF67B:
            {
              Type: "AWS::EC2::SecurityGroupEgress",
              Properties: {
                GroupId: {
                  "Fn::GetAtt": [
                    "MyFargateServiceLBSecurityGroup6FBF16F1",
                    "GroupId",
                  ],
                },
                IpProtocol: "tcp",
                Description: "Load balancer to target",
                DestinationSecurityGroupId: {
                  "Fn::GetAtt": [
                    "MyFargateServiceSecurityGroup7016792A",
                    "GroupId",
                  ],
                },
                FromPort: 80,
                ToPort: 80,
              },
            },
          MyFargateServiceLBPublicListener61A1042F: {
            Type: "AWS::ElasticLoadBalancingV2::Listener",
            Properties: {
              DefaultActions: [
                {
                  TargetGroupArn: {
                    Ref: "MyFargateServiceLBPublicListenerECSGroup4A3EDF05",
                  },
                  Type: "forward",
                },
              ],
              LoadBalancerArn: {
                Ref: "MyFargateServiceLBDE830E97",
              },
              Port: 80,
              Protocol: "HTTP",
            },
          },
          MyFargateServiceLBPublicListenerECSGroup4A3EDF05: {
            Type: "AWS::ElasticLoadBalancingV2::TargetGroup",
            Properties: {
              Port: 80,
              Protocol: "HTTP",
              TargetType: "ip",
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
            },
          },
          MyFargateServiceTaskDefTaskRole62C7D397: {
            Type: "AWS::IAM::Role",
            Properties: {
              AssumeRolePolicyDocument: {
                Statement: [
                  {
                    Action: "sts:AssumeRole",
                    Effect: "Allow",
                    Principal: {
                      Service: "ecs-tasks.amazonaws.com",
                    },
                  },
                ],
                Version: "2012-10-17",
              },
            },
          },
          MyFargateServiceTaskDef5DA17B39: {
            Type: "AWS::ECS::TaskDefinition",
            Properties: {
              ContainerDefinitions: [
                {
                  Essential: true,
                  Image: "amazon/amazon-ecs-sample",
                  LogConfiguration: {
                    LogDriver: "awslogs",
                    Options: {
                      "awslogs-group": {
                        Ref: "MyFargateServiceTaskDefwebLogGroup4A6C44E8",
                      },
                      "awslogs-stream-prefix": "MyFargateService",
                      "awslogs-region": {
                        Ref: "AWS::Region",
                      },
                    },
                  },
                  Name: "web",
                  PortMappings: [
                    {
                      ContainerPort: 80,
                      Protocol: "tcp",
                    },
                  ],
                },
              ],
              Cpu: "256",
              ExecutionRoleArn: {
                "Fn::GetAtt": [
                  "MyFargateServiceTaskDefExecutionRoleD6305504",
                  "Arn",
                ],
              },
              Family: "MyTestStackMyFargateServiceTaskDef6235E468",
              Memory: "512",
              NetworkMode: "awsvpc",
              RequiresCompatibilities: ["FARGATE"],
              TaskRoleArn: {
                "Fn::GetAtt": [
                  "MyFargateServiceTaskDefTaskRole62C7D397",
                  "Arn",
                ],
              },
            },
          },
          MyFargateServiceTaskDefwebLogGroup4A6C44E8: {
            Type: "AWS::Logs::LogGroup",
            UpdateReplacePolicy: "Retain",
            DeletionPolicy: "Retain",
          },
          MyFargateServiceTaskDefExecutionRoleD6305504: {
            Type: "AWS::IAM::Role",
            Properties: {
              AssumeRolePolicyDocument: {
                Statement: [
                  {
                    Action: "sts:AssumeRole",
                    Effect: "Allow",
                    Principal: {
                      Service: "ecs-tasks.amazonaws.com",
                    },
                  },
                ],
                Version: "2012-10-17",
              },
            },
          },
          MyFargateServiceTaskDefExecutionRoleDefaultPolicyEC22B20F: {
            Type: "AWS::IAM::Policy",
            Properties: {
              PolicyDocument: {
                Statement: [
                  {
                    Action: ["logs:CreateLogStream", "logs:PutLogEvents"],
                    Effect: "Allow",
                    Resource: {
                      "Fn::GetAtt": [
                        "MyFargateServiceTaskDefwebLogGroup4A6C44E8",
                        "Arn",
                      ],
                    },
                  },
                ],
                Version: "2012-10-17",
              },
              PolicyName:
                "MyFargateServiceTaskDefExecutionRoleDefaultPolicyEC22B20F",
              Roles: [
                {
                  Ref: "MyFargateServiceTaskDefExecutionRoleD6305504",
                },
              ],
            },
          },
          MyFargateServiceF490C034: {
            Type: "AWS::ECS::Service",
            Properties: {
              Cluster: {
                Ref: "MyCluster4C1BA579",
              },
              DeploymentConfiguration: {
                MaximumPercent: 200,
                MinimumHealthyPercent: 50,
              },
              DesiredCount: 1,
              EnableECSManagedTags: false,
              HealthCheckGracePeriodSeconds: 60,
              LaunchType: "FARGATE",
              LoadBalancers: [
                {
                  ContainerName: "web",
                  ContainerPort: 80,
                  TargetGroupArn: {
                    Ref: "MyFargateServiceLBPublicListenerECSGroup4A3EDF05",
                  },
                },
              ],
              NetworkConfiguration: {
                AwsvpcConfiguration: {
                  AssignPublicIp: "DISABLED",
                  SecurityGroups: [
                    {
                      "Fn::GetAtt": [
                        "MyFargateServiceSecurityGroup7016792A",
                        "GroupId",
                      ],
                    },
                  ],
                  Subnets: [
                    {
                      Ref: "MyVpcPrivateSubnet1Subnet5057CF7E",
                    },
                    {
                      Ref: "MyVpcPrivateSubnet2Subnet0040C983",
                    },
                  ],
                },
              },
              TaskDefinition: {
                Ref: "MyFargateServiceTaskDef5DA17B39",
              },
            },
            DependsOn: [
              "MyFargateServiceLBPublicListenerECSGroup4A3EDF05",
              "MyFargateServiceLBPublicListener61A1042F",
            ],
          },
          MyFargateServiceSecurityGroup7016792A: {
            Type: "AWS::EC2::SecurityGroup",
            Properties: {
              GroupDescription:
                "MyTestStack/MyFargateService/Service/SecurityGroup",
              SecurityGroupEgress: [
                {
                  CidrIp: "0.0.0.0/0",
                  Description: "Allow all outbound traffic by default",
                  IpProtocol: "-1",
                },
              ],
              VpcId: {
                Ref: "MyVpcF9F0CA6F",
              },
            },
          },
          MyFargateServiceSecurityGroupfromMyTestStackMyFargateServiceLBSecurityGroupE6A072BD80B62F5F02:
            {
              Type: "AWS::EC2::SecurityGroupIngress",
              Properties: {
                IpProtocol: "tcp",
                Description: "Load balancer to target",
                FromPort: 80,
                GroupId: {
                  "Fn::GetAtt": [
                    "MyFargateServiceSecurityGroup7016792A",
                    "GroupId",
                  ],
                },
                SourceSecurityGroupId: {
                  "Fn::GetAtt": [
                    "MyFargateServiceLBSecurityGroup6FBF16F1",
                    "GroupId",
                  ],
                },
                ToPort: 80,
              },
            },
        },
        Outputs: {
          MyFargateServiceLoadBalancerDNS704F6391: {
            Value: {
              "Fn::GetAtt": ["MyFargateServiceLBDE830E97", "DNSName"],
            },
          },
          MyFargateServiceServiceURL4CF8398A: {
            Value: {
              "Fn::Join": [
                "",
                [
                  "http://",
                  {
                    "Fn::GetAtt": ["MyFargateServiceLBDE830E97", "DNSName"],
                  },
                ],
              ],
            },
          },
        },
      },
      MatchStyle.EXACT
    )
  );
});
