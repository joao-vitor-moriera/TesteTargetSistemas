select c.cliente_id as [código], c.nome as [razão social],
from clientes c
INNER JOIN telefones t on (c.cliente_id = t.cliente_id)
INNER JOIN tipos_telefone tt on (t.tipo_telefone=tt.tipo_telefone)
    where c.estado_id = 1 --supondo que SP fosse o código 1
--  where sigla = 'SP'
GROUP BY c.cliente_id, c.nome;