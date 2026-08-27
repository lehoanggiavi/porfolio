# CV follow-JD workflow

This folder contains the three canonical one-page CVs and the analysis record used to tailor a CV to a specific job description (JD).

## Source of truth

- Canonical role CVs: `LeHoangGiaVi_CV_AI_Engineer.tex`, `LeHoangGiaVi_CV_Data_Scientist.tex`, and `LeHoangGiaVi_CV_Data_Analyst.tex`.
- Portfolio and repositories may be used only to verify or shorten claims already supported by the underlying work.
- A technology, skill, responsibility, metric, title, date, publication status, or certification must not be added unless it can be verified from the canonical CV or an inspected project source.
- A missing JD requirement is recorded as `Missing`; it is never converted into a CV claim.

## Files

- `LeHoangGiaVi_CV_AI_Engineer.tex`: one-page AI Engineer CV.
- `LeHoangGiaVi_CV_Data_Scientist.tex`: one-page Data Scientist CV.
- `LeHoangGiaVi_CV_Data_Analyst.tex`: one-page Data Analyst CV.
- `JD_ANALYSIS_TEMPLATE.md`: copy this file for every JD and complete the evidence matrix before editing the CV.

## Tailoring process

1. Save the JD as `jd_<company>_<role>.md` without rewriting its requirements.
2. Copy `JD_ANALYSIS_TEMPLATE.md` to `analysis_<company>_<role>.md`.
3. Classify every important requirement as `Matched`, `Partial`, or `Missing` and cite its local evidence.
4. Copy the closest role base to `LeHoangGiaVi_CV_<Company>_<Role>.tex`.
5. Tailor only the summary, ordering of verified skills, experience emphasis, and project selection.
6. Put missing skills in the analysis report, not in the CV.
7. Compile and verify that the PDF is one page, links work, and extracted text contains no unsupported additions.

## One-page priority order

When space is limited, retain content in this order:

1. Contact details and target role.
2. Relevant professional experience and verified results.
3. Skills explicitly supported by experience or projects.
4. Three or four projects most relevant to the JD.
5. Education.
6. Compact research papers.
7. Certification, only when relevant or space permits.

Awards are intentionally excluded from this format.

## Build

From this directory:

```powershell
xelatex -interaction=nonstopmode -halt-on-error LeHoangGiaVi_CV_AI_Engineer.tex
xelatex -interaction=nonstopmode -halt-on-error LeHoangGiaVi_CV_Data_Scientist.tex
xelatex -interaction=nonstopmode -halt-on-error LeHoangGiaVi_CV_Data_Analyst.tex
```
