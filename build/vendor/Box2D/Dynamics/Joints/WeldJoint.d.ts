import { Mat33, Rot, Vec2, Vec3, XY } from '../../Common/Math';
import { Body } from '../Body';
import { SolverData } from '../TimeStep';
import { IJointDef, Joint, JointDef } from './Joint';
export interface IWeldJointDef extends IJointDef {
    localAnchorA?: XY;
    localAnchorB?: XY;
    referenceAngle?: number;
    frequencyHz?: number;
    dampingRatio?: number;
}
export declare class WeldJointDef extends JointDef implements IWeldJointDef {
    readonly localAnchorA: Vec2;
    readonly localAnchorB: Vec2;
    referenceAngle: number;
    frequencyHz: number;
    dampingRatio: number;
    constructor();
    Initialize(bA: Body, bB: Body, anchor: Vec2): void;
}
export declare class WeldJoint extends Joint {
    private static InitVelocityConstraints_s_P;
    private static SolveVelocityConstraints_s_Cdot1;
    private static SolveVelocityConstraints_s_impulse1;
    private static SolveVelocityConstraints_s_impulse;
    private static SolveVelocityConstraints_s_P;
    private static SolvePositionConstraints_s_C1;
    private static SolvePositionConstraints_s_P;
    private static SolvePositionConstraints_s_impulse;
    m_frequencyHz: number;
    m_dampingRatio: number;
    m_bias: number;
    readonly m_localAnchorA: Vec2;
    readonly m_localAnchorB: Vec2;
    m_referenceAngle: number;
    m_gamma: number;
    readonly m_impulse: Vec3;
    m_indexA: number;
    m_indexB: number;
    readonly m_rA: Vec2;
    readonly m_rB: Vec2;
    readonly m_localCenterA: Vec2;
    readonly m_localCenterB: Vec2;
    m_invMassA: number;
    m_invMassB: number;
    m_invIA: number;
    m_invIB: number;
    readonly m_mass: Mat33;
    readonly m_qA: Rot;
    readonly m_qB: Rot;
    readonly m_lalcA: Vec2;
    readonly m_lalcB: Vec2;
    readonly m_K: Mat33;
    constructor(def: IWeldJointDef);
    InitVelocityConstraints(data: SolverData): void;
    SolveVelocityConstraints(data: SolverData): void;
    SolvePositionConstraints(data: SolverData): boolean;
    GetAnchorA<T extends XY>(out: T): T;
    GetAnchorB<T extends XY>(out: T): T;
    GetReactionForce<T extends XY>(inv_dt: number, out: T): T;
    GetReactionTorque(inv_dt: number): number;
    GetLocalAnchorA(): Readonly<Vec2>;
    GetLocalAnchorB(): Readonly<Vec2>;
    GetReferenceAngle(): number;
    SetFrequency(hz: number): void;
    GetFrequency(): number;
    SetDampingRatio(ratio: number): void;
    GetDampingRatio(): number;
    Dump(log: (format: string, ...args: any[]) => void): void;
}