// Data for the mock AI responses (Table, Chart, Text)
// Note: chartType must be 'bar', 'line', or 'pie' for the DataChartRenderer to work.

const PROMPT_DATABASE = [
  // --- Prompt 1: Table Example ---
  {
    id: "HRM_001",
    index: 1,
    prompt: "Show me Q3 employee turnover rate.",
    response: {
      type: "chart",
      data: {
        chartType: "bar",
        data: [
          // Extended Dummy Data for 2.5 Years (10 quarters)
          { label: "Q2 2023", value: 11.8 },
          { label: "Q3 2023", value: 7.9 },
          { label: "Q4 2023", value: 9.3 },

          { label: "Q1 2024", value: 12.5 },
          { label: "Q2 2024", value: 15.1 }, // High Turnover Quarter
          { label: "Q3 2024", value: 8.3 },
          { label: "Q4 2024", value: 10.9 },

          { label: "Q1 2025", value: 11.2 },
          { label: "Q2 2025", value: 14.7 }, // High Turnover Quarter
          { label: "Q3 2025", value: 9.5 }, // Focus Quarter
        ],
      },
      title: "Quarterly Employee Turnover Rate (%)",
      description:
        "Employee separation rate over the last ten quarters. Q2 consistently shows the highest turnover across the years.",
    },
  },
  // --- Prompt 2: Table Example ---
  {
    id: "HRM_002",
    index: 2,
    prompt: "What is the current headcount by department?",
    response: {
      type: "table",
      data: {
        headers: [
          "Department",
          "Current Headcount",
          "Budgeted Roles",
          "Budget Utilization",
          "Average Salary",
          "Open Roles",
        ],
        rows: [
          ["Engineering (Product)", "112", "120", "93.3%", "$135,000", "8"],
          [
            "Engineering (Infrastructure)",
            "43",
            "45",
            "95.6%",
            "$145,000",
            "2",
          ],
          ["Sales (B2B)", "55", "60", "91.7%", "$105,000", "5"],
          ["Sales (B2C)", "37", "40", "92.5%", "$85,000", "3"],
          ["Marketing (Digital)", "30", "33", "90.9%", "$92,000", "3"],
          ["Marketing (Content)", "15", "17", "88.2%", "$84,000", "2"],
          ["Finance & Accounting", "38", "40", "95.0%", "$110,000", "2"],
          ["Human Resources", "22", "25", "88.0%", "$90,000", "3"],
          ["Operations (Supply Chain)", "45", "50", "90.0%", "$102,000", "5"],
          ["Operations (Logistics)", "20", "20", "100.0%", "$94,000", "0"],
          ["Legal & Compliance", "10", "12", "83.3%", "$130,000", "2"],
          ["Customer Support", "85", "90", "94.4%", "$65,000", "5"],
        ],
      },
      title: "Detailed Organizational Headcount & Budget Snapshot",
      description:
        "Comparison of current active employees against the approved budget for the current fiscal year, including detailed sub-department figures.",
    },
  },
  // --- Prompt 3: Table Example (Detailed Demographics) ---
  {
    id: "HRM_003",
    index: 3,
    prompt: "What are the current employee demographics by gender?",
    response: {
      type: "table", // Changed to table for detailed department breakdown
      data: {
        headers: [
          "Department",
          "Female",
          "Male",
          "Non-binary / Other",
          "Total Headcount",
        ],
        rows: [
          // Row Format: [Department, Female Count, Male Count, Other Count, Total]
          ["Engineering (Product)", "28", "80", "4", "112"],
          ["Engineering (Infrastructure)", "8", "32", "3", "43"],
          ["Sales (B2B)", "15", "40", "0", "55"],
          ["Sales (B2C)", "22", "14", "1", "37"],
          ["Marketing (Digital)", "18", "10", "2", "30"],
          ["Marketing (Content)", "10", "5", "0", "15"],
          ["Finance & Accounting", "20", "18", "0", "38"],
          ["Human Resources", "16", "6", "0", "22"],
          ["Operations (Supply Chain)", "15", "30", "0", "45"],
          ["Operations (Logistics)", "5", "15", "0", "20"],
          ["Legal & Compliance", "7", "3", "0", "10"],
          ["Customer Support", "50", "32", "3", "85"],

          // Total Row (Optional, but adds completeness)
          ["TOTALS", "214", "285", "13", "508"],
        ],
      },
      title: "Detailed Gender Distribution by Department",
      description:
        "Comprehensive breakdown of gender across sub-departments. Note: Engineering and Sales B2B are male-dominant; Marketing and HR are female-dominant.",
    },
  },
  // --- Prompt 4: Chart Example (Line Chart - Trend Analysis) ---
  /*{
    id: "HRM_004",
    index: 4,
    prompt: "What is the average time-to-hire trend?",
    response: {
      type: "chart",
      data: {
        chartType: "line", // Using the Line chart renderer
        data: [
          // Detailed Monthly Data (24 Months - 2 Full Years)
          { label: "Dec '23", value: 45 },
          { label: "Jan '24", value: 48 },
          { label: "Feb '24", value: 43 },
          { label: "Mar '24", value: 40 },
          { label: "Apr '24", value: 38 },
          { label: "May '24", value: 35 },
          { label: "Jun '24", value: 37 },
          { label: "Jul '24", value: 41 },
          { label: "Aug '24", value: 46 },
          { label: "Sep '24", value: 49 },
          { label: "Oct '24", value: 52 }, // Spike due to seasonal hiring
          { label: "Nov '24", value: 55 },
          { label: "Dec '24", value: 58 }, // Highest peak
          { label: "Jan '25", value: 50 },
          { label: "Feb '25", value: 45 },
          { label: "Mar '25", value: 41 },
          { label: "Apr '25", value: 39 },
          { label: "May '25", value: 36 }, // Process efficiency improvement
          { label: "Jun '25", value: 38 },
          { label: "Jul '25", value: 42 },
          { label: "Aug '25", value: 40 },
          { label: "Sep '25", value: 37 },
          { label: "Oct '25", value: 35 },
          { label: "Nov '25", value: 34 }, // Latest data point
        ],
      },
      title: "Average Time-to-Hire (Days) Trend",
      description:
        "Monthly average number of days from job posting to offer acceptance over the last 24 months. Shows volatility during seasonal periods (Q4).",
    },
  },*/
  // --- Prompt 5: Table Example (Detailed Compliance Status) ---
  {
    id: "HRM_005",
    index: 5,
    prompt: "Summarize mandatory annual training compliance status.",
    response: {
      type: "table",
      data: {
        headers: [
          "Department",
          "Completed (%)",
          "Overdue Count",
          "Total Headcount",
          "Manager",
        ],
        rows: [
          ["Engineering (Product)", "92.8%", "8", "112", "A. Sharma"],
          ["Engineering (Infrastructure)", "97.7%", "1", "43", "B. Khan"],
          ["Sales (B2B)", "85.5%", "8", "55", "C. Ramirez"],
          ["Sales (B2C)", "94.6%", "2", "37", "D. Li"],
          ["Marketing (Digital)", "90.0%", "3", "30", "E. Vogel"],
          ["Marketing (Content)", "100%", "0", "15", "F. Singh"],
          ["Finance & Accounting", "97.4%", "1", "38", "G. Chen"],
          ["Human Resources", "95.5%", "1", "22", "H. Jones"],
          ["Operations (Supply Chain)", "88.9%", "5", "45", "I. Patel"],
          ["Operations (Logistics)", "100%", "0", "20", "J. Adams"],
          ["Legal & Compliance", "100%", "0", "10", "K. Smith"],
          ["Customer Support", "89.4%", "9", "85", "L. Brown"],
          ["Executive Leadership", "100%", "0", "8", "CEO"],
          // Total Row (adds extra data points for visualization)
          ["**TOTALS**", "92.3%", "38", "508", "N/A"],
        ],
      },
      title: "Detailed Mandatory Compliance Training Compliance",
      description:
        "Departmental breakdown for the 'Data Security & Ethics' training. Sales B2B and Customer Support have the highest overdue counts.",
    },
  },
  // --- Prompt 6: Table Example (Hybrid Work Statistics) ---
  {
    id: "HRM_006",
    index: 6,
    prompt: "Summarize remote work and hybrid schedules by department.",
    response: {
      type: "table",
      data: {
        headers: [
          "Department",
          "Hybrid Count",
          "Fully Remote Count",
          "On-site Only Count",
          "Avg. On-site Days/Week",
          "Policy Compliance %",
        ],
        rows: [
          // Detailed department data with various work arrangements
          ["Engineering (Product)", "85", "10", "17", "2.5", "98.8%"],
          ["Engineering (Infrastructure)", "30", "5", "8", "3.0", "95.3%"],
          ["Sales (B2B)", "40", "15", "0", "2.0", "100%"], // Fully flexible B2B sales team
          ["Sales (B2C)", "37", "0", "0", "3.0", "91.9%"],
          ["Marketing (Digital)", "25", "5", "0", "2.0", "100%"],
          ["Marketing (Content)", "10", "0", "5", "4.0", "93.3%"],
          ["Finance & Accounting", "30", "0", "8", "4.0", "94.7%"],
          ["Human Resources", "15", "2", "5", "3.5", "95.5%"],
          ["Operations (Supply Chain)", "25", "0", "20", "4.5", "90.0%"],
          ["Operations (Logistics)", "0", "0", "20", "5.0", "100%"], // On-site required
          ["Legal & Compliance", "8", "2", "0", "2.0", "100%"],
          ["Customer Support", "70", "0", "15", "3.5", "92.9%"],
          ["**TOTALS**", "375", "39", "98", "3.0", "96.0%"],
        ],
      },
      title: "Departmental Hybrid and Remote Work Status",
      description:
        "Statistics on employee work location categorization. Note Operations Logistics is 100% on-site, while Sales B2B allows fully remote roles.",
    },
  },
  // --- Prompt 7: Text Example (Detailed Compensation Summary) ---
  {
    id: "HRM_007",
    index: 7,
    prompt:
      "Provide a detailed compensation report for Jane Doe (Employee ID: M-008).",
    response: {
      type: "text",
      text: "### Compensation Report: Jane Doe (M-008)\n\n---\n\n**Role:** Senior Marketing Manager\n**Department:** Marketing (Digital)\n**Location:** Hybrid (3 Days On-site)\n\n#### Current Annual Compensation:\n* **Base Salary:** $115,000.00\n* **Target Bonus (Annual):** 10% of Base ($11,500.00)\n* **Total Target Compensation (TTC):** $126,500.00\n* **Last Review Date:** 2025-09-01 (4.5% Merit Increase)\n* **Compa-Ratio:** 1.05 (5% above midpoint for this pay band).\n\n#### Equity Details (RSUs):\n* **Grant Date:** 2024-03-15\n* **Total Units Granted:** 4,000\n* **Vesting Schedule:** 4-year cliff, 25% vest after Year 1, then monthly over 3 years.\n* **Units Vested To Date:** 1,000\n* **Fair Market Value (FMV) at Vest:** $15.50 per unit\n* **Estimated Vested Value:** $15,500.00\n\n#### Next Action:\nJane is due for a new RSU grant review in Q1 2026 based on performance. Check **HR-COMP-005** for RSU policy.",
    },
  },
  // --- Prompt 8: Chart Example (Bar Chart - Average Bonus Payout) ---
  {
    id: "HRM_008",
    index: 8,
    prompt: "Show me a dashboard of recent employee performance metrics.",
    response: {
      type: "chart",
      data: {
        chartType: "bar",
        data: [
          // Substantial data for various sub-departments
          { label: "Eng (Product)", value: 12.5 },
          { label: "Eng (Infra)", value: 11.8 },
          { label: "Sales (B2B)", value: 15.2 }, // Highest payout
          { label: "Mktg (Digital)", value: 10.5 },
          { label: "Finance", value: 11.0 },
          { label: "HR", value: 9.5 },
          { label: "Legal", value: 11.5 },
          { label: "Support", value: 8.8 }, // Lowest payout
        ],
      },
      title: "Average Bonus Payout as % of Salary (Last Cycle)",
      description:
        "Comparison of average bonus compensation paid out across all departments. Sales teams received the highest payouts due to exceeding revenue targets.",
    },
  },
  // --- Prompt 9: Chart Example (Detailed Pie Chart - Recruitment Sources) ---
  {
    id: "HRM_009",
    index: 9,
    prompt: "Show a detailed breakdown of recruitment sources.",
    response: {
      type: "chart",
      data: {
        chartType: "pie", // Using the Pie chart renderer
        data: [
          // Detailed breakdown for a total of 150 hires YTD
          { label: "Employee Referral (Eng)", value: 25 },
          { label: "Employee Referral (Other)", value: 18 },
          { label: "LinkedIn Recruiter (InMail)", value: 35 },
          { label: "LinkedIn Recruiter (Ads)", value: 10 },
          { label: "Careers Page Direct", value: 20 },
          { label: "Agency (IT/Tech)", value: 15 },
          { label: "Agency (Sales)", value: 8 },
          { label: "Job Boards (Indeed)", value: 10 },
          { label: "University Relations", value: 9 },
        ],
      },
      title: "YTD Hires by Detailed Recruitment Source",
      description:
        "Breakdown of the 150 hires made this year. Employee Referrals remain the highest quality source, particularly within the Engineering department.",
    },
  },
  // --- Prompt 10: Table Example (Scatter Plot Data Simulation) ---
  {
    id: "HRM_010",
    index: 10,
    prompt:
      "Compare performance rating against current salary for the Engineering team.",
    response: {
      type: "table",
      data: {
        headers: [
          "Employee ID",
          "Role Title",
          "Annual Salary",
          "Performance Rating (1-5)",
          "Tenure (Years)",
          "Compa-Ratio",
        ],
        rows: [
          // Data Points intended for a Scatter/Bubble Plot
          ["E0115", "Software Engineer II", "$135,000", "4.5", "3.2", "1.05"],
          ["E0022", "Senior Engineer", "$170,000", "5.0", "5.8", "1.00"],
          ["E0098", "Junior Developer", "$95,000", "3.5", "0.9", "0.98"],
          ["E0312", "Lead Engineer", "$195,000", "4.8", "7.1", "1.10"],
          ["E0405", "Software Engineer I", "$120,000", "4.0", "1.5", "0.95"],
          ["E0188", "Senior Engineer", "$155,000", "3.9", "4.5", "0.91"], // Potential red flag (High tenure, lower compa-ratio)
          ["E0250", "Tech Lead", "$210,000", "5.0", "6.5", "1.08"],
          ["E0160", "Software Engineer II", "$140,000", "5.0", "2.1", "1.08"], // High performance, average salary
          ["E0045", "Data Scientist", "$165,000", "4.2", "4.0", "1.02"],
          ["E0330", "Junior Developer", "$100,000", "4.0", "1.1", "1.03"],
          ["E0078", "Software Engineer III", "$160,000", "4.8", "3.8", "1.00"],
          ["E0201", "QA Specialist", "$110,000", "4.0", "5.0", "0.90"], // Potential red flag (Long tenure, lowest compa-ratio)
          ["E0199", "Engineering Manager", "$180,000", "5.0", "8.0", "0.99"],
          ["E0355", "Software Engineer II", "$130,000", "3.0", "2.5", "0.90"], // Low performance, low compa-ratio
        ],
      },
      title: "Engineering Team: Performance vs. Compensation Data",
      description:
        "Raw data points for visualizing the relationship between Q4 performance rating and current annual salary. Useful for identifying pay equity outliers.",
    },
  },
  // --- Prompt 11: Gantt Chart Data Structure ---
  {
    id: "HRM_011",
    index: 11,
    prompt:
      "Show the deployment timeline for the new HRIS system (Gantt view).",
    response: {
      type: "gantt", // The new dedicated type!
      data: {
        headers: [
          "Task ID",
          "Task Name",
          "Assigned Team",
          "Start Date",
          "Duration (Days)",
          "Dependency (ID)",
        ],
        rows: [
          // Data structured for a timeline (Gantt) visualization
          [
            "P001",
            "Vendor Selection & Contract",
            "HR Leadership",
            "2026-01-15",
            45,
            "None",
          ],
          [
            "P002",
            "Data Migration Planning",
            "HRIS Team",
            "2026-03-01",
            10,
            "P001",
          ],
          [
            "P003",
            "System Configuration (Core)",
            "Vendor/HRIS",
            "2026-03-11",
            60,
            "P002",
          ],
          [
            "P004",
            "Testing & UAT (Pilot Group)",
            "HR/UAT Team",
            "2026-05-15",
            20,
            "P003",
          ],
          [
            "P005",
            "Training Material Creation",
            "L&D",
            "2026-04-01",
            30,
            "P003",
          ],
          [
            "P006",
            "Full Staff Training Rollout",
            "L&D",
            "2026-06-05",
            15,
            "P004, P005",
          ], // Milestone
        ],
      },
      title: "HRIS Deployment Project Timeline (Gantt Data)",
      description:
        "Detailed timeline for the new HRIS implementation project, showing task durations and dependencies. P008 (Go-Live) is the target milestone.",
    },
  },
  // --- Prompt 12: Waterfall Chart Data Structure ---
  {
    id: "HRM_012",
    index: 12,
    prompt: "Show the Headcount reconciliation for Q4 (Waterfall view).",
    response: {
      type: "waterfall", // The new dedicated type!
      data: {
        headers: [
          "Activity",
          "Employees In (+)",
          "Employees Out (-)",
          "Net Change",
        ],
        rows: [
          // Data structured for a Waterfall visualization
          ["Starting Headcount (Oct 1)", "485", "-", "-", "485"], // Start value
          ["New Hires (Engineering)", "15", "-", "+15", "-"],
          ["New Hires (Sales)", "10", "-", "+10", "-"],
          ["Voluntary Departures", "-", "8", "-8", "-"],
          ["Involuntary Departures", "-", "4", "-4", "-"],
          ["Internal Transfers In", "5", "-", "+5", "-"],
          ["Internal Transfers Out", "-", "2", "-2", "-"],
          ["Ending Headcount (Dec 31)", "499", "-", "-", "499"], // End value (calculated: 485 + 15 + 10 - 8 - 4 + 5 - 2 = 499)
        ],
      },
      title: "Q4 Headcount Reconciliation (Waterfall Data)",
      description:
        "Visualizes the net change in total employee headcount during Q4. The net headcount increase was 14 employees (499 final - 485 initial).",
    },
  },
  // --- Prompt 13: Heatmap Chart Data Structure ---
  {
    id: "HRM_013",
    index: 13,
    prompt: "Show employee leave coverage (heatmap view) for next week.",
    response: {
      type: "heatmap", // The new dedicated type!
      data: {
        headers: [
          "Department",
          "Mon (2nd)",
          "Tue (3rd)",
          "Wed (4th)",
          "Thu (5th)",
          "Fri (6th)",
        ],
        rows: [
          // Rows structured for a matrix/heatmap visualization
          // Value represents the number of employees on leave that day
          ["Engineering", 5, 4, 3, 6, 8], // Fri is heaviest for Engineering
          ["Sales", 8, 7, 5, 5, 10], // Sales is heavy on Fri and Mon
          ["Marketing", 2, 2, 1, 3, 3],
          ["Finance", 1, 1, 0, 1, 2],
          ["Operations", 4, 5, 6, 7, 4], // Operations spikes mid-week
          ["Customer Support", 10, 8, 9, 12, 15], // Highest volume across the board, especially Friday
          ["HR", 1, 0, 1, 0, 1],
        ],
      },
      title: "Employee Leave Coverage Matrix (Next Week)",
      description:
        "Visualizes the number of employees on approved leave per department, per day. Fridays and Customer Support show the highest volume (red spots on a Heatmap).",
    },
  },
  // --- Prompt 14: Treemap Chart Data Structure (Hierarchical Breakdown) ---
  /*{
    id: "HRM_014",
    index: 14,
    prompt: "Show the total compensation budget allocation (Treemap view).",
    response: {
      type: "treemap", // The new dedicated type!
      data: {
        headers: ["Parent Group", "Sub-Group", "Budget Value ($M)", "Budget %"],
        rows: [
          // Data structured for a Hierarchical (Treemap) visualization
          // Total Budget = $50.0M
          ["Technology", "Engineering (Product)", "15.0", "30%"],
          ["Technology", "Engineering (Infrastructure)", "8.0", "16%"],
          ["Sales & Marketing", "Sales (B2B)", "7.5", "15%"],
          ["Sales & Marketing", "Marketing (Digital)", "4.0", "8%"],
          ["G&A", "Finance", "4.5", "9%"],
          ["G&A", "Human Resources", "3.0", "6%"],
          ["Operations", "Supply Chain", "5.0", "10%"],
          ["Operations", "Logistics", "3.0", "6%"],
        ],
      },
      title: "Total Compensation Budget Allocation (FY 2026)",
      description:
        "Hierarchical breakdown of the $50 Million annual compensation budget. Technology accounts for the largest share.",
    },
  },*/
  // --- Prompt 15: Text Example (Detailed Policy Summary) ---
  {
    id: "HRM_015",
    index: 15,
    prompt: "Summarize the PTO accumulation, usage, and carry-over policy.",
    response: {
      type: "text",
      text: "### Comprehensive Paid Time Off (PTO) Policy Summary\n\n---\n\n#### 1. Accrual Rates (Based on Years of Service):\n\n* **0-2 Years:** 4.0 hours accrued per 80-hour pay period (equivalent to 13 days/year).\n* **3-5 Years:** 5.2 hours accrued per 80-hour pay period (equivalent to 17 days/year).\n* **5+ Years:** 6.1 hours accrued per 80-hour pay period (equivalent to 20 days/year).\n\n#### 2. Usage Rules & Limits:\n\n* **Request Notice:** Must be submitted through the Kernn portal at least **14 business days** in advance for 3+ consecutive days.\n* **Maximum Annual Usage:** 25 days (for employees under the 5+ years tier).\n* **Minimum Balance:** Employees cannot go below a zero balance (no negative PTO allowed).\n\n#### 3. Carry-Over and Payout:\n\n* **Carry-Over Limit:** Employees may carry over up to **64 hours (8 days)** of unused PTO into the next fiscal year (March 1st).\n* **Maximum Cap:** Total accumulated PTO cannot exceed **240 hours (30 days)**. Hours above this cap are automatically paid out at the base rate at year-end.\n* **Payout upon Separation:** All unused accrued PTO is paid out upon termination, regardless of whether the separation is voluntary or involuntary. See **HR-POL-PTO-001, Section 5.B**.",
    },
  },
  // --- Prompt 16: Funnel Chart Data Structure ---
  /*{
    id: "HRM_016",
    index: 16,
    prompt: "Analyze the new hire conversion pipeline (Funnel view).",
    response: {
      type: "funnel", // The new dedicated type!
      data: {
        headers: [
          "Milestone Stage",
          "Employees Reached",
          "Retention Rate (from Start)",
          "Drop-off Rate (since last)",
        ],
        rows: [
          // Data structured for a Funnel visualization
          ["1. Total Hires (Start Day)", "80", "100%", "0%"],
          ["2. Day 1 Completion", "79", "98.7%", "1.3%"], // 1 employee no-show
          ["3. 30-Day Checkpoint Passed", "75", "93.7%", "5.1%"], // 4 employees left/terminated
          ["4. Mandatory Training Compliance", "72", "90.0%", "4.0%"],
          ["5. 90-Day Conversion Review", "70", "87.5%", "2.8%"], // Final official retention point
          ["6. Successfully Integrated (180 days)", "68", "85.0%", "2.9%"],
        ],
      },
      title: "New Hire Onboarding & Retention Funnel (Q4)",
      description:
        "Tracks the new hire cohort retention across key milestones. The highest drop-off occurs before the 30-day checkpoint, suggesting early engagement issues.",
    },
  },
  // --- Prompt 17: Box Plot Chart Data Structure ---
  {
    id: "HRM_017",
    index: 17,
    prompt: "Compare salary distribution by key job families (Box Plot view).",
    response: {
      type: "boxplot", // The new dedicated type!
      data: {
        headers: [
          "Job Family",
          "Min",
          "Q1 (25th)",
          "Median (Q2)",
          "Q3 (75th)",
          "Max",
          "Outliers",
        ],
        rows: [
          // Data structured for a Box Plot visualization
          // Values are in USD (Thousands)
          ["Software Dev", "90", "135", "155", "180", "220", "250, 265"], // Outliers are separate
          ["Sales", "70", "95", "120", "150", "190", "210"],
          ["HR & Admin", "55", "75", "90", "110", "135", "None"],
          ["Data Science", "110", "140", "160", "175", "200", "225"],
          ["Customer Support", "45", "55", "65", "80", "95", "None"],
        ],
      },
      title: "Salary Distribution by Job Family (Box Plot Data)",
      description:
        "Comparison of the five-number salary summary across key job families. Shows the wide range in Software Development and the tightly controlled range in Customer Support.",
    },
  },*/
  // --- Prompt 18: Stacked Bar Chart Data Structure ---
  {
    id: "HRM_018",
    index: 18,
    prompt:
      "Show the headcount distribution by department and tenure (Stacked Bar view).",
    response: {
      type: "stackedbar", // The new dedicated type!
      data: {
        headers: [
          "Department",
          "Senior (5+ Years)",
          "Mid-Level (1-5 Years)",
          "Junior (0-1 Year)",
          "Total Headcount",
        ],
        rows: [
          // Data structured for a Stacked Bar visualization
          // Value represents the number of employees in that segment
          ["Engineering", 15, 80, 50, 145], // High ratio of mid/junior staff
          ["Sales", 5, 40, 50, 95], // High ratio of new/junior staff
          ["Marketing", 10, 25, 10, 45],
          ["Finance", 8, 20, 10, 38],
          ["Operations", 12, 40, 13, 65],
          ["Customer Support", 2, 35, 48, 85], // Very high junior staff ratio
        ],
      },
      title: "Headcount by Department Stacked by Tenure",
      description:
        "Visualizes the total composition of each department based on employee tenure. Highlights the high percentage of junior staff in Customer Support and Sales.",
    },
  },
  // --- Prompt 19: Text Example (Detailed Procedure Summary) ---
  {
    id: "HRM_019",
    index: 19,
    prompt: "Summarize the exit interview and offboarding procedure.",
    response: {
      type: "text",
      text: "### Employee Offboarding & Exit Interview Procedure (HR-PROC-007)\n\n---\n\n#### 1. Resignation Acceptance & Date Setting:\n* Manager accepts resignation formally within **1 business day**.\n* Final working day must be confirmed (typically 14 days notice, unless contractually obliged to 30 days).\n\n#### 2. HR Checklist Initiation (Days -10 to -5):\n* **IT Department:** Revokes system access and initiates equipment recovery (T-1 day).\n* **HR Benefits:** Sends final compensation and benefits election paperwork.\n* **Payroll:** Calculates final pay, including accrued PTO (as per policy HR-POL-PTO-001).\n\n#### 3. Exit Interview Scheduling:\n* Scheduled by the HR Business Partner (HRBP) to occur **within the final 3 working days**.\n* **Completion Rate Target:** 95% of departing employees must complete the standardized survey/interview.\n* **Key Data Points Tracked:** Reason for Leaving (Top 3: Compensation, Career Growth, Management).\n\n#### 4. Final Paycheck & Paperwork:\n* Final paycheck is issued on the next regular pay cycle (not automatically on the last day).\n* All company property must be returned by 5:00 PM on the employee's last working day.",
    },
  },
  // --- Prompt 20: Table Example (Detailed Survey Results) ---
  {
    id: "HRM_020",
    index: 20,
    prompt:
      "Show the latest employee satisfaction survey results by department.",
    response: {
      type: "table",
      data: {
        headers: [
          "Department",
          "Job Satisfaction (1-5)",
          "Career Growth (1-5)",
          "Mgmt Trust (1-5)",
          "Work-Life Balance (1-5)",
          "Total Respondents",
        ],
        rows: [
          // Detailed satisfaction scores (Scale 1-5, 5 is highest)
          ["Engineering", "3.8", "3.1", "4.0", "3.5", "145"],
          ["Sales", "3.5", "4.2", "3.2", "2.9", "95"], // High growth, low work-life balance
          ["Marketing", "4.1", "3.9", "4.5", "3.8", "45"],
          ["Finance", "4.0", "3.3", "4.1", "4.1", "38"],
          ["Operations", "3.7", "3.0", "3.5", "3.3", "65"],
          ["Customer Support", "3.2", "2.5", "3.0", "2.7", "85"], // Lowest scores across the board
          ["HR", "4.5", "4.0", "4.8", "4.2", "22"],
          ["TOTAL COMPANY", "3.8", "3.5", "3.9", "3.4", "508"],
        ],
      },
      title: "Q4 Employee Satisfaction Survey Results",
      description:
        "Average scores (out of 5) for key drivers across departments. Customer Support shows the highest areas of concern, particularly in Career Growth and Work-Life Balance.",
    },
  },

  // --- Placeholder for remaining 19 prompts ---
  // You will add the remaining 19 prompts here following the structure:
  // "Prompt Text Goes Here": { type: "table", data: { ... }, title: "..." },
];

/**
 * 1. Returns a list of all defined prompt keys.
 * @returns {string[]} An array of all prompt strings.
 */
/**
 * 1. Returns a list of all defined prompt objects.
 * @returns {object[]} An array of all prompt objects ({id, index, prompt, response}).
 */
export const getAllPrompts = () => {
  // Assuming PROMPT_DATABASE is the array containing all 20 prompts
  return PROMPT_DATABASE;
};

/**
 * 2. Returns 4 random prompt text strings for suggestions.
 * @returns {string[]} An array containing 4 random prompt strings (the text of the prompt).
 */
export const getRandomPrompts = () => {
  // Extract only the prompt text strings from the full database array
  const allPromptTexts = PROMPT_DATABASE.map((p) => p.prompt);

  // Shuffle and slice the texts
  const shuffled = allPromptTexts.sort(() => 0.5 - Math.random());

  // Return the first 4 elements, or fewer if the database is small
  return shuffled.slice(0, 4);
};

/**
 * 3. Returns the structured response data for a given prompt string.
 * This function now uses Array.find() to locate the prompt text in the PROMPT_DATABASE array.
 * @param {string} promptText - The exact text of the prompt key.
 * @returns {object | null} The structured response object (the 'response' key) or null if not found.
 */
export const getMappedResponse = (promptText) => {
  // Find the object in the array where the 'prompt' field matches the input text
  const item = PROMPT_DATABASE.find((p) => p.prompt === promptText);

  // Return the 'response' object within the found item, or null
  return item ? item.response : null;
};
