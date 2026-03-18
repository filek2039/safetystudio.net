export interface SafetyMoment {
  id: string
  title: string
  body: string
}

export interface SMCategory {
  id: string
  label: string
  moments: SafetyMoment[]
}

export const SM_CATEGORIES: SMCategory[] = [
  {
    id: 'h2s',
    label: 'H2S Awareness',
    moments: [
      {
        id: 'h2s-1',
        title: 'Know Your Enemy',
        body: "H2S is colourless, heavier than air, and smells like rotten eggs — but only at low concentrations. At high levels it kills your sense of smell instantly. Never rely on your nose to detect it. Always check your gas monitor before entering any confined or low-lying space.",
      },
      {
        id: 'h2s-2',
        title: 'Wind Direction Saves Lives',
        body: "Before any job in an H2S-risk area, take 30 seconds to check the wind direction. Your muster point and escape route should always be upwind of the hazard. If the wind shifts during work, stop and reassess before continuing.",
      },
      {
        id: 'h2s-3',
        title: 'Buddy System, No Exceptions',
        body: "Nobody enters an H2S-risk area alone. If your partner goes down, your job is to raise the alarm — not to attempt a rescue without breathing apparatus. A second casualty helps nobody. Call for the rescue team, stay upwind, and wait.",
      },
    ],
  },
  {
    id: 'ptw',
    label: 'Permit to Work',
    moments: [
      {
        id: 'ptw-1',
        title: 'The Permit Is Your Contract',
        body: "A permit to work isn't just paperwork. It's your formal agreement that hazards have been identified, controls are in place, and the right people have signed off. Never start work without one — even if you've done the job a hundred times before.",
      },
      {
        id: 'ptw-2',
        title: 'Scope Creep Kills',
        body: "If the job changes, the permit changes. Extending a hot-work permit to cover an extra valve or running a line that wasn't in the original scope? Stop, return the permit, and get a new one. Scope creep is one of the most common factors in major incidents.",
      },
      {
        id: 'ptw-3',
        title: 'Closing Out Matters',
        body: "When the job is done, close the permit properly. Sign it off, confirm the area is safe, and make sure the next shift knows what happened. An open permit left hanging at shift change is an invitation for a serious incident.",
      },
    ],
  },
  {
    id: 'wah',
    label: 'Working at Height',
    moments: [
      {
        id: 'wah-1',
        title: 'The Three Points Rule',
        body: "Whenever you're moving on a ladder or scaffold, keep three points of contact at all times — two hands and one foot, or two feet and one hand. The moment you rush and break that rule is the moment things go wrong. Take your time; the job will wait.",
      },
      {
        id: 'wah-2',
        title: 'Inspect Before You Climb',
        body: "Before using any ladder, take 60 seconds to check it: look for damaged rungs, check the feet aren't worn, and make sure it extends at least 1 metre above the landing point. A cracked rung you missed at the bottom becomes a very different problem 5 metres up.",
      },
      {
        id: 'wah-3',
        title: 'Secure Your Tools',
        body: "Dropped objects cause as many injuries at height as falls do. Every tool you take up should be tethered or kept in a tool bag. A 200g hammer dropped from 10 metres hits the ground with the force of a serious assault. Protect the people below you.",
      },
    ],
  },
  {
    id: 'dropped',
    label: 'Dropped Objects',
    moments: [
      {
        id: 'dropped-1',
        title: 'Look Up, Look Out',
        body: "Before walking under any elevated work, check whether there is active work overhead. If there is, either wait or take a different route. Most dropped object incidents happen because someone walked into a drop zone without looking up first.",
      },
      {
        id: 'dropped-2',
        title: 'The Barricade Is There for a Reason',
        body: "When you see a drop zone barricaded off, don't lift the tape to take a shortcut. The person working above you doesn't know you're there. Respect the exclusion zone every single time, even when it looks empty up top.",
      },
      {
        id: 'dropped-3',
        title: 'Secondary Retention',
        body: "Every item at height needs a secondary means of retention — a tool tether, a toe board, a tool bag, or a safety net. The primary fixing can fail without warning. Secondary retention is what stops a failure from becoming a fatality.",
      },
    ],
  },
  {
    id: 'manual',
    label: 'Manual Handling',
    moments: [
      {
        id: 'manual-1',
        title: 'Assess Before You Lift',
        body: "Before picking anything up, ask yourself: is this within my capability, do I have a clear path, and is there a better way? Team lifts, mechanical aids, and repositioning the load first can prevent back injuries that follow workers for the rest of their careers.",
      },
      {
        id: 'manual-2',
        title: 'Keep It Close',
        body: "The further a load is from your body when you lift it, the more force your back absorbs. Pull the load close to your centre before you lift. Reaching out to grab something from a shelf is how the majority of handling injuries happen — slow down and step in instead.",
      },
      {
        id: 'manual-3',
        title: "It's Not Just the Heavy Stuff",
        body: "Most people think about manual handling for large, heavy items. But repetitive handling of lighter loads — boxes, tools, materials handled dozens of times a day — causes just as many injuries through cumulative strain. Build in brief breaks and vary your posture.",
      },
    ],
  },
  {
    id: 'driving',
    label: 'Vehicle & Driving',
    moments: [
      {
        id: 'driving-1',
        title: 'Journey Management, Not Just a Form',
        body: "A journey management plan is only useful if people actually use it. Tell someone where you're going, when you expect to arrive, and what to do if you don't check in. In remote field locations, that conversation is the difference between a quick rescue and a three-day search.",
      },
      {
        id: 'driving-2',
        title: 'Fatigue Is Impairment',
        body: "Driving after 18 hours without sleep produces the same impairment as a blood-alcohol level over the legal limit. If you're tired, pull over. No delivery schedule, meeting, or deadline is worth a fatality. Stop, rest, and complete the journey safely.",
      },
      {
        id: 'driving-3',
        title: 'The Last Kilometre',
        body: "Most site vehicle incidents happen within a few kilometres of the destination — when drivers relax because they're 'almost there.' Stay focused until the engine is off and the handbrake is on. Complacency at the end of a journey is just as dangerous as distraction at the start.",
      },
    ],
  },
  {
    id: 'fire',
    label: 'Fire Prevention',
    moments: [
      {
        id: 'fire-1',
        title: 'Hot Work in Hazardous Areas',
        body: "Welding, grinding, or any spark-producing work near hydrocarbon sources requires a hot-work permit, continuous gas monitoring, and a dedicated fire watch. If the monitor alarms, stop immediately — don't try to finish the last weld bead.",
      },
      {
        id: 'fire-2',
        title: 'Know Your Extinguisher',
        body: "A CO₂ extinguisher on a flammable liquid fire works. Water on the same fire can spread it explosively. Before any job, take 30 seconds to locate the nearest extinguisher and confirm it's the right type. PASS — Pull, Aim, Squeeze, Sweep — should be second nature.",
      },
      {
        id: 'fire-3',
        title: 'Keep Ignition Sources Away',
        body: "Static electricity, mobile phones, non-intrinsically-safe radios, and worn electrical cables are all ignition sources in classified hazardous areas. Enforce the rules every single time, not just when the HSE team is watching. One spark in the wrong atmosphere ends careers and lives.",
      },
    ],
  },
  {
    id: 'confined',
    label: 'Confined Space',
    moments: [
      {
        id: 'confined-1',
        title: 'Test Before You Enter',
        body: "Oxygen level, flammable gas, and toxic gas must all be tested before entry — and continuously monitored throughout the job. A space that tested clean an hour ago can have a completely different atmosphere now. Always test at the point of entry, not from outside.",
      },
      {
        id: 'confined-2',
        title: 'The Attendant Never Leaves',
        body: "The confined space attendant stays at the entry point for the entire duration of the job. They don't go for a coffee, help with work inside, or leave for another task. The moment they leave, the rescue chain is broken and the next casualty could be preventable.",
      },
      {
        id: 'confined-3',
        title: 'Rescue Plan First',
        body: "Before anyone enters, the rescue plan must be in place: rescue team identified, equipment at hand, and everyone briefed. Most confined space fatalities involve rescuers who entered without equipment. The rescue plan is a pre-entry requirement, not an afterthought.",
      },
    ],
  },
  {
    id: 'scaffold',
    label: 'Scaffold & Access',
    moments: [
      {
        id: 'scaffold-1',
        title: 'Only Use Tagged Scaffolding',
        body: "Scaffolding must be inspected and tagged by a competent person before use, and again after any modification, severe weather, or nearby incident. A green tag means it's safe to use. No tag means don't use it — regardless of how solid it looks.",
      },
      {
        id: 'scaffold-2',
        title: 'Load Limits Are Real',
        body: "Scaffolding is designed for a specific load. Stacking materials, parking plant on boards, or crowding a bay with too many workers can exceed that limit without any visible warning. Know the rated capacity and never exceed it.",
      },
      {
        id: 'scaffold-3',
        title: 'Gaps and Guardrails',
        body: "Every scaffold platform should have guardrails at 950mm and 470mm height, toe boards, and no gaps wider than 25mm in the boards. Before you start work, walk the platform and check all four. Report deficiencies before you start — not after someone falls.",
      },
    ],
  },
  {
    id: 'excavation',
    label: 'Excavation',
    moments: [
      {
        id: 'exc-1',
        title: 'Dial Before You Dig',
        body: "Before any excavation, confirm the position of underground services — electricity, gas, water, telecoms. Use utility drawings, cable avoidance tools, and hand-dig in the last 500mm near confirmed services. A single mis-strike on a buried cable or gas main can be fatal.",
      },
      {
        id: 'exc-2',
        title: 'Battering vs. Shoring',
        body: "An unsupported trench wall can collapse without warning, even in apparently firm soil. Any excavation deeper than 1.2 metres needs either battering (sloping the sides) or shoring. Don't assume it's fine because it's been standing for three days.",
      },
      {
        id: 'exc-3',
        title: 'Keep Spoil Away from the Edge',
        body: "Excavated material piled close to the trench edge increases the load on the wall and is the most common trigger for a collapse. Keep spoil at least 1 metre back from the edge. Never allow workers in the trench while plant is operating directly above.",
      },
    ],
  },
]
