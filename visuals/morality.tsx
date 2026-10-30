"use client"

import { CompareTable, StepStrip, VisualCard } from "@/components/visuals/kit"
import { DecisionTree } from "@/components/visuals/tree"

function Theories() {
  return (
    <VisualCard
      title="Secular ethical theories at a glance"
      subtitle="What each theory says makes an act right, what it gets right, and the problems theists raise against it as a foundation for obligation."
      sources={[
        { label: "Stanford Encyclopedia of Philosophy, \"Consequentialism\"", url: "https://plato.stanford.edu/entries/consequentialism/" },
        { label: "Stanford Encyclopedia of Philosophy, \"Contractarianism\"", url: "https://plato.stanford.edu/entries/contractarianism/" },
        { label: "Stanford Encyclopedia of Philosophy, \"Kant's Moral Philosophy\"", url: "https://plato.stanford.edu/entries/kant-moral/" },
        { label: "Stanford Encyclopedia of Philosophy, \"Virtue Ethics\"", url: "https://plato.stanford.edu/entries/ethics-virtue/" },
      ]}
    >
      <CompareTable
        minWidth="50rem"
        compact
        columns={[
          { key: "t", label: "Theory" },
          { key: "right", label: "What makes an act right" },
          { key: "strength", label: "Its strength" },
          { key: "problem", label: "Problem raised" },
        ]}
        rows={[
          { t: "Utilitarianism", right: "It produces the greatest happiness overall", strength: "Takes everyone's welfare seriously", problem: "Can justify sacrificing an innocent minority for a large majority" },
          { t: "Social contract", right: "Rational people would agree to it", strength: "Explains why cooperation is reasonable", problem: "Leaves out those who cannot bargain: children, the disabled" },
          { t: "Kantian ethics", right: "Its maxim could be a universal law; persons are ends, not means", strength: "Grounds human dignity and universal duty", problem: "Kant himself postulated God and immortality for the highest good" },
          { t: "Virtue ethics", right: "A virtuous person would do it", strength: "Attends to character, not only acts", problem: "Virtue needs a human purpose to aim at" },
          { t: "Non-theistic moral realism", right: "Basic moral truths are necessary truths needing no foundation", strength: "Takes moral facts as objective", problem: "Brute moral facts do not explain obligation" },
        ]}
      />
    </VisualCard>
  )
}

function Euthyphro() {
  return (
    <VisualCard
      title="The Euthyphro dilemma and the third answer"
      subtitle="Plato's question as a choice between two horns, and the classical theist reply that rejects the choice."
      sources={[
        { label: "Stanford Encyclopedia of Philosophy, \"Religion and Morality\"", url: "https://plato.stanford.edu/entries/religion-morality/" },
        { label: "Internet Encyclopedia of Philosophy, \"Divine Command Theory\"", url: "https://iep.utm.edu/divine-c/" },
      ]}
    >
      <DecisionTree
        root={{
          question: "Is something good because God commands it, or does God command it because it is good?",
          branches: [
            { label: "Because commanded", to: { outcome: "Goodness is arbitrary", body: "God could have commanded cruelty and made it good.", tone: "reject" } },
            { label: "Because good", to: { outcome: "Goodness is independent of God", body: "A standard above God that he merely reports.", tone: "reject" } },
            { label: "Neither", to: { outcome: "Goodness is God's own nature", body: "His commands express his unchanging character, so they are neither arbitrary nor answerable to anything outside him.", tone: "accept" } },
          ],
        }}
      />
    </VisualCard>
  )
}

function MoralArgument() {
  return (
    <VisualCard
      title="The moral argument and where it is contested"
      subtitle="The argument is valid, so the debate is about which premise to deny."
      sources={[
        { label: "Stanford Encyclopedia of Philosophy, \"Moral Arguments for the Existence of God\"", url: "https://plato.stanford.edu/entries/moral-arguments-god/" },
        { label: "Stanford Encyclopedia of Philosophy, \"Moral Realism\"", url: "https://plato.stanford.edu/entries/moral-realism/" },
      ]}
    >
      <StepStrip
        steps={[
          { label: "Premise 1", title: "If God does not exist, objective moral values and duties do not exist.", body: "Denied by non-theistic moral realists such as Derek Parfit, Russ Shafer-Landau and Erik Wielenberg." },
          { label: "Premise 2", title: "Objective moral values and duties do exist.", body: "Denied by moral anti-realists, such as J.L. Mackie's error theory; accepted by most atheist philosophers." },
          { label: "Conclusion", title: "Therefore, God exists.", body: "Follows necessarily if both premises are true." },
        ]}
      />
    </VisualCard>
  )
}

function Dignity() {
  return (
    <VisualCard
      title="Equal human worth: milestones"
      subtitle="Steps by which the doctrine that every person bears God's image (Genesis 1:27) entered law and argument, alongside the failures it had to overcome."
      sources={[
        { label: "Wikipedia, \"Infanticide\" (capital offence in Roman law, 374)", url: "https://en.wikipedia.org/wiki/Infanticide" },
        { label: "Wikipedia, \"Gregory of Nyssa\"", url: "https://en.wikipedia.org/wiki/Gregory_of_Nyssa" },
        { label: "Wikipedia, \"Valladolid debate\"", url: "https://en.wikipedia.org/wiki/Valladolid_debate" },
        { label: "Wikipedia, \"Slave Trade Act 1807\"", url: "https://en.wikipedia.org/wiki/Slave_Trade_Act_1807" },
        { label: "Wikipedia, \"Universal Declaration of Human Rights\"", url: "https://en.wikipedia.org/wiki/Universal_Declaration_of_Human_Rights" },
      ]}
    >
      <StepStrip
        steps={[
          { label: "AD 374", title: "Infanticide outlawed", body: "Made a capital offence under the Christian emperors, though rarely prosecuted." },
          { label: "c. 379", title: "Gregory of Nyssa", body: "The first known sermon condemning slavery as such." },
          { label: "1550-51", title: "Valladolid", body: "Las Casas argues for the full humanity of the peoples of the Americas against Sepúlveda." },
          { label: "1807", title: "Slave Trade Act", body: "Britain abolishes the slave trade after an evangelical-led campaign." },
          { label: "1948", title: "Universal Declaration", body: "\"All human beings are born free and equal in dignity and rights.\"" },
        ]}
      />
    </VisualCard>
  )
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  theories: Theories,
  euthyphro: Euthyphro,
  "moral-argument": MoralArgument,
  dignity: Dignity,
}

export default function Visuals({ name }: { readonly name: string }) {
  const V = VISUALS[name]
  return V ? <V /> : null
}
