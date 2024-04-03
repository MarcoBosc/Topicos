describe("Masking Functions", function() {
    // Test for maskNumberCel function
    it("should format phone number for cell phones", function() {
        const event = { target: { value: '1234567890' } };
        maskNumberCel(event);
        expect(event.target.value).toEqual('(12)34567-890');
    });

    // Test for maskNumberTel function
    it("should format phone number for landlines", function() {
        const event = { target: { value: '1234567890' } };
        maskNumberTel(event);
        expect(event.target.value).toEqual('(12)3456-7890');
    });

    // Test for maskDateCadastro function
    it("should not allow future dates for data_cadastro", function() {
        document.getElementById("data_cadastro").value = "2025-01-01";
        spyOn(window, 'alert');
        maskDateCadastro();
        expect(window.alert).toHaveBeenCalledWith("A data de cadastro não pode ser maior que a data atual.");
        expect(document.getElementById("data_cadastro").value).toEqual('');
    });

    // Test for maskDateNascimento function
    it("should not allow future dates for data_nascimento", function() {
        document.getElementById("data_nascimento").value = "2025-01-01";
        spyOn(window, 'alert');
        maskDateNascimento();
        expect(window.alert).toHaveBeenCalledWith("A data de Nascimento não pode ser maior que a data atual.");
        expect(document.getElementById("data_nascimento").value).toEqual('');
    });

    // Test for maskCEP function
    it("should format CEP", function() {
        const event = { target: { value: '12345678' } };
        maskCEP(event);
        expect(event.target.value).toEqual('12345-678');
    });

    // Test for maskCPFCNPJ function
    it("should format CPF", function() {
        const input = { value: '12345678901' };
        maskCPFCNPJ(input);
        expect(input.value).toEqual('123.456.789-01');
    });

    it("should format CNPJ", function() {
        const input = { value: '12345678901234' };
        maskCPFCNPJ(input);
        expect(input.value).toEqual('12.345.678/9012-34');
    });

    // Test for validateCPF function
    it("should validate CPF", function() {
        expect(validateCPF('111.111.111-11')).toBe(false); // CPF inválido
        expect(validateCPF('123.456.789-09')).toBe(true);  // CPF válido
    });

    // Test for validateCNPJ function
    it("should validate CNPJ", function() {
        expect(validateCNPJ('11.111.111/0001-11')).toBe(false); // CNPJ inválido
        expect(validateCNPJ('00.000.000/0001-91')).toBe(true);  // CNPJ válido
    });
});
