import React, { useMemo, useState } from "react";

const initialSalespeople = [
  {
    id: 1,
    name: "SNGUON Chanthy",
    branch: "Battambang Branch",
    role: "Relationship Manager",
    long: "4 years 1 month",
    target: 720000,
    actual: 3352875.37,
    image: "/images/SNGUON Chanthy.jpg",
  },
  {
    id: 2,
    name: "CHEAV Mengheng",
    branch: "Baktuk Branch",
    role: "Relationship Officer",
    long: "1 Years 5 Months",
    target: 40000,
    actual: 2409473.97,
    image: "/images/CHEAV Mengheng.jpg",
  },
  {
    id: 3,
    name: "HENG Leakhena",
    branch: "Norodom Branch",
    role: "Relationship Officer",
    long: "1 year 5 months",
    target: 320000,
    actual: 2154911.47,
    image: "/images/HENG Leakena.jpg",
  },
  {
    id: 4,
    name: "SOK Chet",
    branch: "Chip Mong Tower Branch",
    role: "Relationship Manager",
    long: "4 Years 1 Months",
    target: 960000,
    actual: 2105000,
    image: "/images/SOK Chet.jpg",
  },
  {
    id: 5,
    name: "MOR Sophaktra",
    branch: "Mao Tse Tong Branch",
    role: "Relationship Officer",
    long: "1 year",
    target: 320000,
    actual: 2049297.28,
    image: "/images/MOR Sophaktra.jpg",
    
  },
  {
    id: 6,
    name: "THAVY Socheata",
    branch: "Siem Reap Branch",
    role: "Relationship Officer",
    long: "1 year",
    target: 280000,
    actual: 1303909.75,
    image: "/images/THAVY Socheata.jpg",
    
  },
  {
    id: 7,
    name: "SOL Shearm",
    branch: "Sensok Mall Branch",
    role: "Relationship Officer",
    long: "1 year 9 months",
    target: 320000,
    actual: 1214871.83,
    image: "/images/SOL Shearm.jpg",
    
  },
  {
    id: 8,
    name: "MOM Leakena",
    branch: "Mao Tse Tong Branch",
    role: "Relationship Officer",
    long: "1 year 6 months",
    target: 320000,
    actual: 1205927.8,
    image: "/images/MOM Leakhena.jpg",
    
  },
  {
    id: 9,
    name: "KEO Sambat Thida",
    branch: "Mao Tse Tong Branch",
    role: "Relationship Officer",
    long: "1 year 10 months",
    target: 320000,
    actual: 1192125,
    image: "/images/KEO Sambat Thida.jpg",
    
  },
  {
    id: 10,
    name: "KET Kakada",
    branch: "Toul Kork Branch",
    role: "Relationship Officer",
    long: "1 year 9 months",
    target: 320000,
    actual: 1079490,
    image: "/images/KET Kakada.jpg",
    
  },
];

const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const getAchievement = (actual, target) => {
  const safeActual = Number(actual || 0);
  const safeTarget = Number(target || 0);

  if (safeTarget <= 0) return 0;

  return (safeActual / safeTarget) * 100;
};

const getStatus = (achievement) => {
  if (achievement >= 100) return "Above Target";
  if (achievement >= 85) return "Near Target";
  if (achievement >= 60) return "Below Target";
  return "Critical";
};

const getTheme = (achievement) => {
  if (achievement >= 100) {
    return {
      text: "text-green-600",
      badge: "bg-green-50 text-green-700 border-green-200",
      icon: "↑",
    };
  }

  if (achievement >= 85) {
    return {
      text: "text-amber-500",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      icon: "•",
    };
  }

  if (achievement >= 60) {
    return {
      text: "text-orange-500",
      badge: "bg-orange-50 text-orange-700 border-orange-200",
      icon: "•",
    };
  }

  return {
    text: "text-red-600",
    badge: "bg-red-50 text-red-700 border-red-200",
    icon: "↓",
  };
};

const getGaugeNeedleAngle = (achievement) => {
  const clamped = Math.max(0, Math.min(achievement, 130));
  return -90 + (clamped / 130) * 180;
};

function GaugeChart({ achievement }) {
  const angle = getGaugeNeedleAngle(achievement);
  const theme = getTheme(achievement);

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 260 170"
        className="h-40 w-64 max-w-full overflow-visible"
      >
        <path
          d="M 35 125 A 95 95 0 0 1 225 125"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="28"
          strokeLinecap="butt"
        />

        <path
          d="M 35 125 A 95 95 0 0 1 78 48"
          fill="none"
          stroke="#16a34a"
          strokeWidth="28"
          strokeLinecap="butt"
        />

        <path
          d="M 78 48 A 95 95 0 0 1 130 30"
          fill="none"
          stroke="#a3e635"
          strokeWidth="28"
          strokeLinecap="butt"
        />

        <path
          d="M 130 30 A 95 95 0 0 1 182 48"
          fill="none"
          stroke="#facc15"
          strokeWidth="28"
          strokeLinecap="butt"
        />

        <path
          d="M 182 48 A 95 95 0 0 1 213 89"
          fill="none"
          stroke="#fb923c"
          strokeWidth="28"
          strokeLinecap="butt"
        />

        <path
          d="M 213 89 A 95 95 0 0 1 225 125"
          fill="none"
          stroke="#ef4444"
          strokeWidth="28"
          strokeLinecap="butt"
        />

        <text x="30" y="150" className="fill-slate-500 text-xs font-bold">
          0%
        </text>

        <text x="74" y="58" className="fill-slate-500 text-xs font-bold">
          25%
        </text>

        <text x="122" y="18" className="fill-slate-500 text-xs font-bold">
          50%
        </text>

        <text x="184" y="58" className="fill-slate-500 text-xs font-bold">
          75%
        </text>

        <text x="214" y="150" className="fill-slate-500 text-xs font-bold">
          100%
        </text>

        <g
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: "130px 125px",
          }}
        >
          <line
            x1="130"
            y1="125"
            x2="130"
            y2="47"
            stroke="#0f2a4f"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </g>

        <circle cx="130" cy="125" r="12" fill="#0f2a4f" />
      </svg>

      <p className={`-mt-4 text-3xl font-extrabold ${theme.text}`}>
        {achievement.toFixed(1)}%
      </p>
    </div>
  );
}

function SalesRow({ person }) {
  const achievement = getAchievement(person.actual, person.target);
  const theme = getTheme(achievement);
  const status = getStatus(achievement);

  return (
    <div className="grid grid-cols-1 items-center gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 lg:grid-cols-[170px_1fr_260px_280px]">
      <div className="flex justify-center lg:justify-start">
        <img
          src={person.image}
          alt={person.name}
          className="h-32 w-32 rounded-full border-4 border-slate-100 object-cover shadow-md"
          onError={(event) => {
            event.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
              person.name
            )}&background=2563eb&color=ffffff&size=256`;
          }}
        />
      </div>

      <div className="text-center lg:text-left">
        <p className="mb-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
          Worked: {person.long}
        </p>

        <h2 className="text-3xl font-extrabold text-slate-950">
          {person.name}
        </h2>

        <p className="mt-3 text-lg font-semibold text-slate-500">
          {person.branch}
        </p>

        <p className="mt-1 text-base text-slate-500">{person.role}</p>
      </div>

      <div className="border-slate-200 text-center lg:border-l lg:pl-8 lg:text-left">
        <p className="text-base font-semibold text-slate-500">Actual Sales</p>

        <p className="mt-2 text-4xl font-extrabold text-slate-950">
          {money(person.actual)}
        </p>

        <p className="mt-3 text-lg text-slate-500">
          Target: {money(person.target)}
        </p>

        <div
          className={`mt-3 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-bold ${theme.badge}`}
        >
          <span>{theme.icon}</span>
          <span>{achievement.toFixed(1)}% of target</span>
        </div>

        <p className="mt-2 text-sm font-semibold text-slate-500">{status}</p>
      </div>

      <GaugeChart achievement={achievement} />
    </div>
  );
}

function InputPanel({ people, setPeople }) {
  const updatePerson = (id, field, value) => {
    setPeople((prev) =>
      prev.map((person) =>
        person.id === id
          ? {
              ...person,
              [field]:
                field === "target" || field === "actual"
                  ? Number(value)
                  : value,
            }
          : person
      )
    );
  };

  const resetData = () => {
    setPeople(initialSalespeople);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-slate-950">
            Input Sales Data
          </h2>

          <p className="text-sm text-slate-500">
            Change profile image path, worked long, target, and actual sale here.
          </p>
        </div>

        <button
          onClick={resetData}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          Reset Mock Data
        </button>
      </div>

      <div className="space-y-4">
        {people.map((person) => (
          <div
            key={person.id}
            className="grid grid-cols-1 gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-2 xl:grid-cols-[120px_1fr_1fr_1fr_1fr_1fr]"
          >
            <div>
              <label className="mb-1 block text-xs font-bold text-slate-500">
                Name
              </label>

              <input
                value={person.name}
                onChange={(event) =>
                  updatePerson(person.id, "name", event.target.value)
                }
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-500">
                Branch
              </label>

              <input
                value={person.branch}
                onChange={(event) =>
                  updatePerson(person.id, "branch", event.target.value)
                }
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-500">
                Worked Long
              </label>

              <input
                value={person.long}
                onChange={(event) =>
                  updatePerson(person.id, "long", event.target.value)
                }
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-500">
                Target Sale
              </label>

              <input
                type="number"
                value={person.target}
                onChange={(event) =>
                  updatePerson(person.id, "target", event.target.value)
                }
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-500">
                Actual Sale
              </label>

              <input
                type="number"
                value={person.actual}
                onChange={(event) =>
                  updatePerson(person.id, "actual", event.target.value)
                }
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-slate-500">
                Profile Image Path
              </label>

              <input
                value={person.image}
                onChange={(event) =>
                  updatePerson(person.id, "image", event.target.value)
                }
                className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SummaryCards({ people }) {
  const totalTarget = people.reduce(
    (sum, person) => sum + Number(person.target || 0),
    0
  );

  const totalActual = people.reduce(
    (sum, person) => sum + Number(person.actual || 0),
    0
  );

  const achievement = getAchievement(totalActual, totalTarget);
  const gap = totalActual - totalTarget;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-500">Total Target</p>

        <p className="mt-2 text-2xl font-extrabold text-slate-950">
          {money(totalTarget)}
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-500">Total Actual</p>

        <p className="mt-2 text-2xl font-extrabold text-blue-700">
          {money(totalActual)}
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-500">Achievement</p>

        <p className={`mt-2 text-2xl font-extrabold ${getTheme(achievement).text}`}>
          {achievement.toFixed(1)}%
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-slate-500">Sales Gap</p>

        <p
          className={`mt-2 text-2xl font-extrabold ${
            gap >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {gap >= 0 ? "+" : ""}
          {money(gap)}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [people, setPeople] = useState(initialSalespeople);
  const [showInput, setShowInput] = useState(true);

  const sortedPeople = useMemo(() => {
    return [...people].sort(
      (a, b) =>
        getAchievement(b.actual, b.target) -
        getAchievement(a.actual, a.target)
    );
  }, [people]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-5 text-slate-900 md:p-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-600">
              Individual Dashboard
            </p>

            <h1 className="mt-2 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
              Sales Performance
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              Each row is one salesperson with profile, worked long, actual sale,
              target, and gauge chart.
            </p>
          </div>

          <button
            onClick={() => setShowInput((prev) => !prev)}
            className="rounded-2xl bg-blue-700 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200 hover:bg-blue-800"
          >
            {showInput ? "Hide Input" : "Show Input"}
          </button>
        </div>

        {showInput && <InputPanel people={people} setPeople={setPeople} />}

        <SummaryCards people={people} />

        <div className="space-y-6">
          {sortedPeople.map((person) => (
            <SalesRow key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}