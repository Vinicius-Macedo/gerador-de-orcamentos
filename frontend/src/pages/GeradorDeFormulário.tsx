import { StepNumber } from "@/components/StepNumber";
import { ProgressBar } from "@/components/progressBar";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/title";
import { Text } from "@/components/ui/text";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
import { handleChange } from "@/lib/formHandler";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Header } from "@/partials/Header";

const completeForm = {
  name: "",
  email: "",
  product: "",
  hardware: "",
  modalidade: "",
  licenses: "",
  customLicense: "",
  equipments: "",
  gateways: "",
  aparelhosIp: "",
};

interface GeradorDeFormularioProps {}
export function GeradorDeFormulario(props: GeradorDeFormularioProps) {
  const [progress, setProgress] = useState(33);
  const [form, setForm] = useState<any>(completeForm);

  return (
    <>
      <Header />
      <div className="w-[500px] flex flex-col mx-auto pt-10">
        <div>
          <Title className="text-center">
            Vamos fazer o seu orçamento rapidinho!
          </Title>
          <Text className="text-center">Preencha os campos abaixo</Text>
        </div>
        <div className="relative my-10">
          <div className="absolute left-0 -translate-x-1 top-1/2 -translate-y-1/2 flex w-full justify-between">
            <StepNumber wasPassed={progress > 0} step={1} />
            <StepNumber wasPassed={progress > 50} step={2} />
            <StepNumber wasPassed={progress == 100} step={3} />
          </div>
          <ProgressBar progress={progress} />
        </div>
        <div className="flex flex-col gap-2 pt-5 w-[350px] mx-auto">
          <div>
            <Label>Nome:</Label>
            <Input
              placeholder="Digite seu nome..."
              type="text"
              onChange={(e) => handleChange(e, setForm)}
              value={form.name}
              name="name"
            />
          </div>
          <div>
            <Label>Email:</Label>
            <Input
              placeholder="Digite seu email..."
              type="email"
              name="email"
              onChange={(e) => handleChange(e, setForm)}
              value={form.email}
            />
          </div>
          <div>
            <Label>Produto:</Label>
            <Select
              onValueChange={(value) => setForm({ ...form, product: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Produtos</SelectLabel>
                  {/* Produto 1:  PABX IP XHand One */}
                  {/* Produto 2: PABX IP XHand Cloud */}
                  {/* Produto 3: PABX IP XHand Class 5 */}
                  {/* Equipamentos */}
                  <SelectItem value="pabx-ip-xhand-one">
                    PABX IP XHand One
                  </SelectItem>
                  <SelectItem value="pabx-ip-xhand-cloud">
                    PABX IP XHand Cloud
                  </SelectItem>
                  <SelectItem value="pabx-ip-xhand-class-5">
                    PABX IP XHand Class 5
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* ARVORE DO PABX-IP-XHAND-ONE */}
          </div>
          {/* UTILIZE A LÓGICA DO completeForm PARA CRIAR OS OUTROS ITENS DO FORMULÁRIO */}

          {form.product === "pabx-ip-xhand-one" ? (
            <>
              <div>
                <Label>Hardware</Label>
                <Input
                  type="text"
                  placeholder="Digite o hardware..."
                  name="hardware"
                  onChange={(e) => handleChange(e, setForm)}
                />
              </div>
              <div>
                <Label>Software</Label>
                <Input
                  type="text"
                  placeholder="Digite o software..."
                  name="software"
                  onChange={(e) => handleChange(e, setForm)}
                />
              </div>
              <div>
                <Label>Licenças</Label>
                {/* Select com as seguintes opções: "até 100", "até 200" e "Personalizar", se for escolhido "Personalizar" abre um input para digitar a quantidade de licenças */}
                <Select
                  onValueChange={(value) =>
                    setForm({ ...form, licenses: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Licenças</SelectLabel>
                      <SelectItem value="ate-100">Até 100</SelectItem>
                      <SelectItem value="ate-200">Até 200</SelectItem>
                      <SelectItem value="personalizar">Personalizar</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {form.licenses === "personalizar" ? (
                <div>
                  <Label>Quantidade de licenças</Label>
                  <Input
                    type="text"
                    placeholder="Digite a quantidade de licenças..."
                    name="customLicense"
                    onChange={(e) => handleChange(e, setForm)}
                  />
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
          <div>
            {/* SELECT com o nome de Equipamentos tendo duas opções: "Gateway
            FSX/FXO/GSM" e "Aparelhos IP". Se selecionado "Gateway FSX/FXO/GSM"
            abre um select com as seguintes opções: "GATEWAYS SIP - FXS",
            "GATEWAYS SIP - FXO" e "GATEWAYS SIP - GSM (Chipeira)". Caso
            selecionado "Aparelhos IP" abre um select com as seguintes opções:
            "Aparelho IP - HP01 Modelo com PoE e Sem PoE", "Aparelho IP - PoE
            HP02" e "Aparelho IP - PoE HP04 C/ Modulo de Teclas". */}
            <Label>Equipamentos</Label>
            <Select
              onValueChange={(value) => setForm({ ...form, equipments: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Equipamentos</SelectLabel>
                  <SelectItem value="gateway">Gateway FSX/FXO/GSM</SelectItem>
                  <SelectItem value="aparelhos-ip">Aparelhos IP</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {form.equipments === "gateway" ? (
            <div>
              <Label>Gateway</Label>
              <Select
                onValueChange={(value) => setForm({ ...form, gateways: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gateway</SelectLabel>
                    <SelectItem value="gateways-sip-fxs">
                      GATEWAYS SIP - FXS
                    </SelectItem>
                    <SelectItem value="gateways-sip-fxo">
                      GATEWAYS SIP - FXO
                    </SelectItem>
                    <SelectItem value="gateways-sip-gsm">
                      GATEWAYS SIP - GSM (Chipeira)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          ) : (
            ""
          )}
          {form.equipments === "aparelhos-ip" ? (
            <div>
              <Label>Aparelhos IP</Label>
              <Select
                onValueChange={(value) =>
                  setForm({ ...form, aparelhosIp: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Aparelhos IP</SelectLabel>
                    <SelectItem value="aparelho-ip-hp01-modelo-com-poe-e-sem-poe">
                      Aparelho IP - HP01 Modelo com PoE e Sem PoE
                    </SelectItem>
                    <SelectItem value="aparelho-ip-poe-hp02">
                      Aparelho IP - PoE HP02
                    </SelectItem>
                    <SelectItem value="aparelho-ip-poe-hp04-c-modulo-de-teclas">
                      Aparelho IP - PoE HP04 C/ Modulo de Teclas
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          ) : (
            ""
          )}
        </div>
        <Button className="w-[100px] mx-auto mt-8">Continuar</Button>
      </div>
    </>
  );
}
